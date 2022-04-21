import React from 'react';

const Cart = () => {
    return <h1>Cart</h1>
};

const Products = () => {
    return <h1>Products</h1>
};

const Header = () => {
    return <h1>Header</h1>
};

export default function index() {
  return (
    <div>
      <h1>Context Example</h1>
      <hr />

      <Header />
      <hr />
      <div className="row">
        <div className="col">
          <Products />
        </div>
        <div className="col">
          <Cart />
        </div>
      </div>
    </div>
  );
}
