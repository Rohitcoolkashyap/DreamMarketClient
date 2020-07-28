import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";
export default function CartPage(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const id = props.match.params.productId;
  const qty = props.location.search
    ? parseInt(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, []);
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const checkOutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return error ? (
    <div>{error}</div>
  ) : (
    <div className="cart_product">
      {cartItems.length === 0 ? (
        <div className="cart_emp">
          <h1>cart is empty </h1>
        </div>
      ) : (
        cartItems.map((item) => (
          <div className="cart" key={item.productId}>
            <div>
              <Link to={"/product/" + item.productId}>
                <img src={item.image} />
              </Link>
            </div>
            <div className="cart_detail">
              <div>
                <Link to={"/product/" + item.productId}>{item.name}</Link>
                <p>price : {item.price}</p>
              </div>
              Qty:
              <select
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item.productId, e.target.value))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <button
                className="del-but"
                onClick={() => removeFromCartHandler(item.productId)}
              >
                delete
              </button>
            </div>
          </div>
        ))
      )}
      <div className="checkout_box">
        <h4>
          subtotal ({cartItems.reduce((a, c) => a + parseInt(c.qty), 0)} items )
          : ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
        </h4>
        <button onClick={checkOutHandler}>proceed to checkout</button>
      </div>
    </div>
  );
}
