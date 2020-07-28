import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailProduct } from "../../actions/productActions";

export default function ProductPage(props) {
  const [qty, setQty] = useState(1);
  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailProduct(props.match.params.productId));
  }, []);

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.productId}?qty=${qty}`);
  };

  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="product_page2">
      <div className="product_container2">
        <img src={product.image} alt="" />
      </div>
      <div className="product_info2">
        <h3>product name : {product.name}</h3>
        <p>price (inr) : {product.price}</p>
        <p>description : {product.description}</p>
      </div>
      <ul className="cart_box2">
        <li>price (inr) : {product.price}</li>
        <li>
          state : {product.countInStock !== 0 ? "in stock" : "out of stock"}
        </li>
        <li>
          qty:
          <select
            disabled={product.countInStock === 0}
            className="qty2"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
            }}
          >
            {[...Array(product.countInStock).keys()].map((x) => (
              <option value={x + 1} key={x}>
                {x + 1}
              </option>
            ))}
          </select>
        </li>
        <li>
          {product.countInStock !== 0 && (
            <button onClick={handleAddToCart} className="addToCart">
              Add to Cart
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
