import React from "react";
import Header from "./components/_App.js/Header";
import Footer from "./components/_App.js/Footer";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage";
import cartPage from "./components/Cart/CartPage";
import Signup from "./components/User/Signup";
import Signin from "./components/User/Signin";
import Store from "./components/Admin/Store";
import Admin from "./components/Admin/Admin";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductForm from "./components/Admin/ProductForm";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Products}></Route>
          <Route
            path="/product/:productId"
            exact
            component={ProductPage}
          ></Route>
          <Route path="/cart/:productId?" exact component={cartPage}></Route>
          <Route path="/signin" exact component={Signin}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/store" exact component={Store}></Route>
          <Route path="/createProduct" exact component={ProductForm}></Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
