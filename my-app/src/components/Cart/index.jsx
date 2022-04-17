import React, { useContext } from "react";
import { useCart } from "../../hooks/cart/useCart";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  return (
    <div>
      <table className="table">
        <tbody>
          {cart?.map((product) => (
            <tr>
              <td>{product.title}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
