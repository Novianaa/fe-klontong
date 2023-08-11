import axios from "axios";

const LoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const LoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  };
};

const LoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error
  };
};

export const LoginAuth = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(LoginRequest())
      const result = await axios({
        method: 'POST',
        url: `https://api.escuelajs.co/api/v1/auth/login`,
        data: {
          email: formData.email,
          password: formData.password,
        },
      })
      // console.log('firstdd', result)

      dispatch(LoginSuccess(result))
    }
    catch (err) {
      console.log(err)
      // dispatch(LoginError(err.response.data))
    }
  }
}
