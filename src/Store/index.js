import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage'
import rootReducer from "./Reducers"

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
let persistor = persistStore(store)
export {
  store, persistor
}
