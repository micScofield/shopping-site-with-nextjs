import React from 'react'
import { useGetProductsQuery } from 'src/store/services/product.api'

function Test({ shopData }) {
  console.log('redux at server rendering')
  return shopData ? (
    <div>{JSON.stringify(shopData)}</div>
  ) : (
    <div>Failed Query</div>
  )
}

export default Test

// export const getStaticProps = async () => {
//   // dispatch useGetProductsQuery
//   const { data } = useGetProductsQuery()

//   if (!data) {
//     return {
//       redirect: {
//         destination: 'no-data',
//       },
//     }
//   }

//   return {
//     props: {
//       shopData: data,
//     },
//   }
// }
