import { combineReducers } from "redux";
import Auth from '../Reducers/authReducer'
import { GetProducts, GetDetailsProduct } from '../Reducers/productsReducer'

const rootReducer = combineReducers({
  auth: Auth,
  products: GetProducts,
  details: GetDetailsProduct,
})
export default rootReducer