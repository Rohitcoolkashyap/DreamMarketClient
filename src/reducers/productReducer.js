import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_PAGE_REQUEST,
  PRODUCT_PAGE_SUCCESS,
  PRODUCT_PAGE_FAIL,
} from "../constants/productConstants";

function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productDetailReducer(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_PAGE_REQUEST:
      return { loading: true };
    case PRODUCT_PAGE_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_PAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { productListReducer, productDetailReducer };
