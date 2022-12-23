import React from 'react'
import { getCategoriesAndDocuments } from 'src/common/utils/firebase/firebase.utils'

function Shop({ shopData }) {
  const entries = Object.entries(shopData)

  if (!entries) {
    // handle case here
  }

  return entries
    ? entries.length !== 0 &&
        entries.map(([key, value]) => (
          <div key={key}>
            <h1>{key}</h1>
            <div>{JSON.stringify(value)}</div>
          </div>
        ))
    : null
}

export default Shop

export const getStaticProps = async () => {
  const data = await getCategoriesAndDocuments()

  if (!data) {
    return {
      redirect: {
        destination: 'no-data',
      },
    }
  }

  return {
    props: {
      shopData: data,
    },
  }
}
