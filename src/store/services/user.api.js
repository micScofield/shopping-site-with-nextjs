import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from 'src/common/utils/firebase/firebase.utils'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    signInWithGoogle: builder.mutation({
      async queryFn() {
        console.log('signInWithGoogle: Making firebase utility calls')
        const { user } = await signInWithGooglePopup()
        return createUserDocumentFromAuth(user)
      },
    }),
    signInWithEmailAndPassword: builder.mutation({
      async queryFn({ email, password }) {
        console.log('signInWithEmailAndPassword: Making firebase utility calls')
        return signInAuthUserWithEmailAndPassword(email, password)
      },
    }),
    signUpWithEmailAndPassword: builder.mutation({
      async queryFn({ email, password, displayName }) {
        console.log(
          'signUpWithEmailAndPassword: Making firebase utility calls',
          email,
          password,
          displayName
        )
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        )

        return createUserDocumentFromAuth(user, { displayName })
      },
    }),
  }),
})

export const {
  useSignInWithGoogleMutation,
  useSignInWithEmailAndPasswordMutation,
  useSignUpWithEmailAndPasswordMutation,
} = userApi
