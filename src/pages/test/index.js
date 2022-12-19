import React from 'react'
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'
import { useGetProductsQuery } from 'src/store/services/product.api'

function Test() {
  console.log('Test Component Rendering')

  const { data, isLoading, isError, error } = useGetProductsQuery()

  console.log({ data, isLoading, isError, error })

  if (isLoading && !data) {
    return <DarkSpinner />
  }

  return !isLoading && data && <div>{JSON.stringify(data)}</div>
}

export default Test
