import axios from "axios";
import Cookie from "js-cookie";
import baseUrl from "../utils/baseUrl";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_REQUEST,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_REQUEST,
} from "../constants/userContants";
const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(`${baseUrl}/api/signin`, {
      email,
      password,
    });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("error");
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: "No user exist of this email",
    });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post(`${baseUrl}/api/signup`, {
      name,
      email,
      password,
    });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("error");
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: "No user exist of this email",
    });
  }
};

export { signin ,register};
