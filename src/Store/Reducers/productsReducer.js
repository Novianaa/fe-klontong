const initialState = {
  loading: false,
  data: {},
}

export const GetProducts = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return { ...state, loading: true }
    case "GET_PRODUCTS_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}
export const GetDetailsProduct = (state = initialState, action = {}) => {
  switch (action.type) {

    case "GET_PRODUCT_REQUEST":
      return { ...state, loading: true }
    case "GET_PRODUCT_ERROR":
      return { ...state, loading: false, data: state.data, error: action.payload }
    case "GET_PRODUCT_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}
