import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCategoriesAndDocuments } from 'src/common/utils/firebase/firebase.utils'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Product'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getProducts: builder.query({
      async queryFn() {
        try {
          console.log(`API request made to fetch products...`)
          const products = await getCategoriesAndDocuments()
          // return { error: 'Blah...!!!' } // test
          return { data: products }
        } catch (err) {
          console.error({ err })
          return err
        }
      },
      providesTags: ['Product'],
      keepUnusedDataFor: 86400, // time in seconds
    }),
  }),
})

export const { useGetProductsQuery } = productApi

/*
Note on automated refetching-
Tags: Slice identifier
Provide tags: Used in query endpoints
Invalidate tags: Used in mutation endpoints: EX. Whenever mutation endpoint is hit, all the query endpoints which mention this tag type make a refetch call automatically
*/
