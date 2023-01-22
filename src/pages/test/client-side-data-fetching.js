import React, { useEffect, useState } from 'react'
import { useGetProductsQuery } from 'src/store/services/product.api'

function ClientSideDataFetching() {
  const [products, setProducts] = useState()

  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetProductsQuery()

  useEffect(() => {
    if (data) {
      setProducts(data)
    }
  })

  if (isLoading) {
    console.log('loading')
    return <div>Loading...</div>
  }
  if (isError) {
    console.log(error)
    return <div>{error}</div>
  }

  return products ? (
    <div onClick={() => refetch()}>{JSON.stringify(products)}</div>
  ) : null
}

export default ClientSideDataFetching
