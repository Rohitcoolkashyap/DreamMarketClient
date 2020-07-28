import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/productActions";
import { Link } from "react-router-dom";

export default function Store(props) {
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      {!form && (
        <table className="store-detail">
          <thead>
            <tr>
              <th>name</th>
              <th>id</th>
              <th>price</th>
              <th>description</th>
              <th>countInStock</th>
              <th>change</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="store-product">
                <td>{product.name}</td>
                <td>{product._id}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.countInStock}</td>
                <td>
                  <button>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="createLink_div">
        <Link className="createLink" to={"/createProduct"}>
          create
        </Link>
      </div>
    </div>
  );
}
