import axios from "axios";
import baseUrl from "../utils/baseUrl";
const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_PAGE_REQUEST,
  PRODUCT_PAGE_SUCCESS,
  PRODUCT_PAGE_FAIL,
} = require("../constants/productConstants");

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`${baseUrl}/api/products`);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const detailProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_PAGE_REQUEST, payload: productId });
    const { data } = await axios.get(`${baseUrl}/api/product/${productId}`);
    dispatch({ type: PRODUCT_PAGE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_PAGE_FAIL, payload: error.message });
  }
};
export { listProducts, detailProduct };
