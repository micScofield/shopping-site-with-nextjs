import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import { useRouter } from 'next/router'
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'
import { getDocument } from 'src/common/utils/firebase/firebase.utils'
import { Typography } from '@mui/material'

function Category({ data }) {
  const router = useRouter()

  // It's better to show a spinner while we are trying to load server's pre-rendered page (either html or a not found page), useful for users with slow connections
  if (router.isFallback) {
    console.log('Rendering fallback...')
    return <DarkSpinner />
  }

  return data
    ? data.items && data.items.length !== 0 && (
        <div>
          <h1>Category: {data.title}</h1>
          {data.items.map(({ id, name, price, imageUrl }) => (
            <div key={id}>{name}</div>
          ))}
          <Typography variant="body1">Test</Typography>
        </div>
      )
    : null
}

export default Category

export const getStaticProps = async (context) => {
  const { categoryId } = context.params

  const data = await getDocument('categories', categoryId)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}

export const getStaticPaths = async (context) => {
  // Find out paths of all categories we want to pre-generate at build time
  const getData = async () => {
    const response = await fs.readFile(
      path.join(process.cwd(), 'data', 'categories.json')
    )

    let parsedData
    try {
      parsedData = JSON.parse(response)
    } catch (err) {
      console.log(err)
    }

    return parsedData
  }

  const data = await getData()

  // format paths in this format = [{ params: { categoryId: <value>  } }, ...]

  const categoryPaths = Object.keys(data).reduce((acc, cur) => {
    acc.push({ params: { categoryId: cur } })
    return acc
  }, [])

  return {
    paths: categoryPaths,
    fallback: true,
  }
}
