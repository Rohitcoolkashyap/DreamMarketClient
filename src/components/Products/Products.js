import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";

export default function Products() {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="product">
      {products.map((product) => (
        <li key={product._id} className="product_container">
          <Link to={`/product/${product._id}`}>
            {" "}
            <img src={product.image} alt="" />
          </Link>

          <div className="product_info">
            <h3>
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </h3>
            <p>price :{product.price}</p>
            <p>description : {product.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
