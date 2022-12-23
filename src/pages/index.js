import { useRouter } from 'next/router'

import fs from 'fs/promises'
import path from 'path'
// import CardContainer from 'src/common/components/card-container/CardContainer'
import dynamic from 'next/dynamic'

const CardContainer = dynamic(
  () => import('src/common/components/card-container/CardContainer'),
  { loading: () => <div>Loading...</div> }
)

const Home = ({ categories }) => {
  const router = useRouter()

  if (!categories) {
    // We are anyways redirecting the user to /no-data (see static method below). We won't reach this block unless we have dynamic routes with fallbacks
  }

  const onOverlayClickHandler = (e, payload) => {
    const {
      cardData: { urlRedirect },
    } = payload
    router.push(`/shop${urlRedirect}`)
  }

  const categoriesArray = Object.entries(categories).map(([key, value]) => {
    value.overlay = [value.title, value.subText]
    value.onOverlayClick = onOverlayClickHandler
    value.overlayPosition = 'middle' // default
    value.showOverlayByDefault = true
    return value
  })

  return (
    <>
      <div className="mt-8" />

      {categoriesArray && categoriesArray.length !== 0 && (
        <CardContainer cards={categoriesArray} />
      )}
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fs.readFile(
    path.join(process.cwd(), 'data', 'categories.json')
  )
  const result = JSON.parse(response)

  // Redirection can also be done from here only in case of no data
  if (!result) {
    return {
      redirect: {
        destination: '/no-data',
      },
    }
  }

  return {
    props: {
      categories: result,
    },
    revalidate: 86400, // 1 day (in seconds) Re build this page after a day. This is Incremental Static Rendering
  }
}

export default Home
