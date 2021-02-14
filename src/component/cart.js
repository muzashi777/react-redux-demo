import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity";

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);
  let productInCart = [];

  Object.keys(basketProps.products).forEach((item) => {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productInCart.push(basketProps.products[item]);
    }
    console.log(productInCart);
  });

  productInCart = productInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <tbody>
          <tr>
            <td>
              <ion-icon
                onClick={() => clearProduct(product.tagName)}
                style={{ color: "red" }}
                name="close-outline"
              ></ion-icon>
              {product.name}
            </td>
            <td>{product.price}</td>
            <td>
              <ion-icon
                onClick={() => productQuantity("decrease", product.tagName)}
                className="decrease icon"
                name="arrow-back-circle-outline"
              ></ion-icon>
              <span className="num">{product.numbers}</span>
              <ion-icon
                onClick={() => productQuantity("increase", product.tagName)}
                className="increase icon"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </td>
            <td>{product.price * product.numbers}</td>
          </tr>
        </tbody>
      </Fragment>
    );
  });
  return (
    <div className="contain-all">
      <h1>This is Cart Page</h1>
      <div className="table-cart">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>Numbers</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          {productInCart}
        </table>
      </div>

      <h4>Total Cost:{basketProps.cartCost}</h4>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
