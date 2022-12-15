import { combineReducers } from '@reduxjs/toolkit'
// import { productApi } from "store/services/product.api"
// import CartReducer from "store/slices/cart.slice"
// import ProductReducer from "store/slices/product.slice"
// import UserReducer from "store/slices/user.slice"
import AlertReducer from 'store/slices/alert.slice'
// import { userApi } from "store/services/user.api"

const rootReducer = combineReducers({
  // user: UserReducer,
  // product: ProductReducer,
  // cart: CartReducer,
  alert: AlertReducer,
  // [productApi.reducerPath]: productApi.reducer,
  // [userApi.reducerPath]: userApi.reducer
})

export default rootReducer
