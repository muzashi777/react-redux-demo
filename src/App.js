import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Cart from "./component/cart";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
