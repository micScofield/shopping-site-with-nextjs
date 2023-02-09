import { useRouter } from 'next/router'

function TestInternationalization2(props) {
  const { data } = props

  const router = useRouter()
  const { locale } = router

  return <h1>{data.title}</h1>
}

export default TestInternationalization2

export async function getServerSideProps(context) {
  console.log('Inside getServerSideProps method')

  const { params, locale } = context

  // make API request for dynamic page like following
  let url = 'https://jsonplaceholder.typicode.com/users'

  if (locale !== 'en-US') {
    url = `https://jsonplaceholder.typicode.com/${locale}/users`
  }

  let returnData = {
    title: 'Hello',
  }

  if (locale === 'fr') {
    returnData = {
      title: 'Bonjour',
    }
  }

  return {
    props: {
      data: returnData,
    },
  }
}
