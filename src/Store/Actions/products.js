import axios from "axios";

const GetProductsPending = () => {
  return {
    type: 'GET_PRODUCTS_REQUEST'
  }
}
const GetProductsSuccess = (data) => {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    payload: data
  }
}
const GetProductsError = (err) => {
  return {
    type: 'GET_PRODUCTS_ERROR',
    payload: err

  }
}

// GET DETAILS PRODUCT 
const GetDetailsProductPending = () => {
  return {
    type: 'GET_PRODUCT_REQUEST'
  }
}
const GetDetailsProductSuccess = (data) => {
  return {
    type: 'GET_PRODUCT_SUCCESS',
    payload: data
  }
}
const GetDetailsProductError = (err) => {
  return {
    type: 'GET_PRODUCT_ERROR',
    payload: err

  }
}
export const GetProducts = () => {
  const limit = '100'
  return async (dispatch) => {
    try {
      dispatch(GetProductsPending())
      const result = await axios({
        method: 'GET',
        url: `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=0`,
      })
      dispatch(GetProductsSuccess(result.data))
    }
    catch (err) {
      console.log(err)
      dispatch(GetProductsError(err.response.data))
    }
  }
}

// GET DETAILS PRODUCT 
export const GetDetailsProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(GetDetailsProductPending())
      const result = await axios({
        method: 'GET',
        url: `https://api.escuelajs.co/api/v1/products/${id}`,
      })
      console.log('first', result)
      dispatch(GetDetailsProductSuccess(result.data))
    }
    catch (err) {
      console.log(err)
      dispatch(GetDetailsProductError(err.response.data))
    }
  }
}