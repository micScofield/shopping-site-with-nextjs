import axios from 'axios'
import React from 'react'

function Shop({ data }) {
  return <div>{JSON.stringify(data)}</div>
}

export default Shop

export const getStaticProps = async () => {
  const res = await axios('https://jsonplaceholder.typicode.com/users/1')

  if (!res.data) {
    return {
      redirect: {
        destination: 'no-data',
      },
    }
  }

  return {
    props: {
      data: res.data,
    },
  }
}

// export const getStaticProps = async () => {
//   const unparsedData = await fetch(
//     'https://jsonplaceholder.typicode.com/users/'
//   )

//   const data = await unparsedData.json()

//   if (!data) {
//     return {
//       redirect: {
//         destination: 'no-data',
//       },
//     }
//   }

//   return {
//     props: {
//       data: data.slice(5),
//     },
//   }
// }
