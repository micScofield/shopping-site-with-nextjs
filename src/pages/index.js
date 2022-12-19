import CardContainer from 'src/common/components/card-container/CardContainer'
import { useRouter } from 'next/router'

import fs from 'fs/promises'
import path from 'path'
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'
import Link from 'next/link'

const Home = ({ categories }) => {
  if (!categories)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )

  const router = useRouter()

  if (!categories) {
    return <DarkSpinner />
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
    <div>
      <h1>Home Page</h1>
      <Link href="/shop/1">404 Page</Link>
      {categoriesArray && categoriesArray.length !== 0 && (
        <CardContainer cards={categoriesArray} />
      )}
    </div>
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
