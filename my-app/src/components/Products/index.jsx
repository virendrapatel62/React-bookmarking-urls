import React, { Fragment, useContext, useEffect, useState } from "react";
import { useCart } from "../../hooks/cart/useCart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <table className="table">
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
