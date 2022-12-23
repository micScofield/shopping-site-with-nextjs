import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore'
import dynamic from 'next/dynamic'
import config from 'src/common/utils/firebase/config'

// const GoogleAuthProvider = dynamic(
//   () => import('firebase/auth').then((module) => module.GoogleAuthProvider),
//   { ssr: false }
// )

initializeApp(config)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (err) {
      console.log('error creating the user', err?.message)
    }
  }

  // return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  // return createUserWithEmailAndPassword(auth, email, password)
  createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  // return signInWithEmailAndPassword(auth, email, password)
  signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  await signOut(auth)
}

// Ran once to store local data to the firestore DB
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)
  // const q = query(collectionRef, limit(3)) // to limit number of documents being fetched from the collection

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items.slice(0, 4) // return only 4 items per category for shop page
    return acc
  }, {})

  return categoryMap
}

// Observable pattern provided by firebase to check if auth state has changed or not and this listener used in the root of the app (App.js) which sets or removes the user info from redux store and thus auth state is determined
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)

// An alternative to above pattern is to use below promise based syntax (Nothing wrong with above one though)
// /*
export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe() // close listener ie. once we receive userAuth info, clean up the memory
        resolve(userAuth)
      },
      reject // third argument is for errors
    )
  })
// */

export async function getDocument(collectionName, documentName) {
  const docRef = doc(db, `${collectionName}`, `${documentName}`)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  }
  console.log('No such document!')
  return null
}
