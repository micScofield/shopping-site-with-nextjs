import { combineReducers } from '@reduxjs/toolkit'
import { productApi } from 'src/store/services/product.api'
import CartReducer from 'src/store/slices/cart.slice'
import ProductReducer from 'src/store/slices/product.slice'
import UserReducer from 'src/store/slices/user.slice'
import AlertReducer from 'src/store/slices/alert.slice'
import { userApi } from 'src/store/services/user.api'

const rootReducer = combineReducers({
  user: UserReducer,
  product: ProductReducer,
  cart: CartReducer,
  alert: AlertReducer,
  [productApi.reducerPath]: productApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
})

export default rootReducer
