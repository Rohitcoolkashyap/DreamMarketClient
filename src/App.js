import React from "react";
import Header from "./components/_App.js/Header";
import Footer from "./components/_App.js/Footer";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage";
import cartPage from "./components/Cart/CartPage";
import Login from "./components/User/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
          <Route path="/login" exact component={Login}></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
