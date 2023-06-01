import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./card.css";

export const Card = ({ product }) => {
  const { id, name, image, price } = product;
  const { addToCart, removeFromCart, cartList } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  const handleAdd = () => {
    addToCart(product);
  };

  useEffect(() => {
    const productInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button onClick={() => removeFromCart(product)} className="remove">
            Remove
          </button>
        ) : (
          <button onClick={handleAdd}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
