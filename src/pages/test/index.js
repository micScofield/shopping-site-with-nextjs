import React from 'react'
// can be dynamically imported
import DarkSpinner from 'src/common/components/spinner/dark/DarkSpinner'
import { useGetProductsQuery } from 'src/store/services/product.api'

function Test() {
  const { data, isLoading, isError, error } = useGetProductsQuery()

  if (isLoading && !data) {
    return <DarkSpinner />
  }

  return !isLoading ? data && <div>{JSON.stringify(data)}</div> : null
}

export default Test
