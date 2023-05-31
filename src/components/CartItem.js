import "./cartItem.css";
export const CartItem = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </div>
  );
};
