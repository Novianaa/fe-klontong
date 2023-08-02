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
