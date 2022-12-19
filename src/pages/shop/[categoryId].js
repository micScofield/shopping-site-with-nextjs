import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import { useRouter } from 'next/router'
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'

function Category({ result }) {
  const router = useRouter()

  // It's better to show a spinner while we are trying to load server's pre-rendered page (either html or a not found page), useful for users with slow connections
  if (router.isFallback) {
    console.log('Rendering fallback...')
    return <DarkSpinner />
  }
  return (
    <div>
      <h1>Category Page</h1>
      {JSON.stringify(result)}
    </div>
  )
}

export default Category

const getData = async () => {
  const response = await fs.readFile(
    path.join(process.cwd(), 'data', 'categories.json')
  )

  const parsedData = JSON.parse(response)

  return parsedData
}

// 1. Using SSR way
// For each and every request. Useful when you want to play around with the req and res object
/*
export const getServerSideProps = async (context) => {
  const { params, req, res } = context

  const id = params.categoryId

  const data = await getData()

  const result = data[id]

  if (!result) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      result,
    },
  }
}
*/

// 2. Using static site generation way
// /*
export const getStaticProps = async (context) => {
  // we get access to the category ID passed in the URL and corresponding data can be fetched on the server side
  const id = context.params.categoryId

  const data = await getData()

  const result = data[id]

  // Setting notFound to true will redirect the user to 404 page.
  // (If we don't do this, the component will not know that there is no data coming and the spinner will keep spinning)
  if (!result) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      result,
    },
  }
}

export const getStaticPaths = async () => {
  const data = await getData()

  const categoryPaths = Object.keys(data).reduce((acc, cur) => {
    acc.push({ params: { categoryId: cur } })
    return acc
  }, [])

  return {
    paths: categoryPaths,
    fallback: true,
  }

  // fallback: false -> Any paths not returned by getStaticPaths will result in a 404 page.
  // [If you do this, and you added another page to the site, you would have to build again, else users will still see 404, as it is generated at build time]

  // fallback: true -> Maybe the requested path wasn't present at build time, in such cases don't show 404 immediately. Use this property to show the spinner to the user while you are loading the page in the background.

  // fallback: blocking -> Web hangs till server sends the response.
}
// */
