import {
  PRODUCT_CART_SUCCESS,
  PRODUCT_CART_FAIL,
  CART_REMOVE_ITEM,
} from "../constants/productConstants";
function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case PRODUCT_CART_SUCCESS:
      const item = action.payload;
      const product = state.cartItems.find(
        (x) => x.productId === item.productId
      );
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.productId === product.productId ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (x) => x.productId !== action.payload
        ),
      };
    case PRODUCT_CART_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
}

export { cartReducer };
