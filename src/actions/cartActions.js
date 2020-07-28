import axios from "axios";
import Cookie from "js-cookie";
import baseUrl from "../utils/baseUrl";
import {
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAIL,
  CART_REMOVE_ITEM,
} from "../constants/productConstants";

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/product/${productId}`);
    dispatch({
      type: PRODUCT_CART_SUCCESS,
      payload: {
        productId: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    dispatch({ type: PRODUCT_CART_FAIL, payload: error.message });
  }
};

const removeFromCart = (productId) => (dispatch, getState) => {
  try {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    const {
      cart: { cartItems },
    } = getState();

    if (cartItems.length !== 0)
      Cookie.set("cartItems", JSON.stringify(cartItems));
    else Cookie.set("cartItems", null);
  } catch (error) {}
};

export { addToCart, removeFromCart };
