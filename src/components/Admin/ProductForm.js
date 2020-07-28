import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../actions/productActions";
export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [image, setImage] = useState("");

  const productList = useSelector((state) => state.productList);
  const { loading, error } = productList;
  const dispatch = useDispatch();
  console.log(name, price, description, image, countInStock);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ name, price, description, countInStock, image }));
  };
  return (
    <div className="product-form">
      <h1>Create Product</h1>
      <div className="form-content">
        <div className="form">
          <form className="product-form-inner" onSubmit={handleSubmit}>
            <div>
              {loading && <div>loading...</div>}
              {error && <div>{error}</div>}
            </div>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              name="decription"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              name="image"
              placeholder="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="number"
              name="countInStock"
              placeholder="countInStock"
              onChange={(e) => setCountInStock(e.target.value)}
            />
            <button type="submit">create product</button>
          </form>
        </div>
      </div>
    </div>
  );
}
