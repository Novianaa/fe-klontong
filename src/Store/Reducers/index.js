import { combineReducers } from "redux";
import Auth from '../Reducers/authReducer'

const rootReducer = combineReducers({
  auth: Auth,
})
export default rootReducer