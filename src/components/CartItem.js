import { useCart } from "../context/CartContext";
import "./cartItem.css";
export const CartItem = ({ product }) => {
  const { name, image, price } = product;

  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};
