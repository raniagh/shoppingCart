import "./card.css";

export const Card = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
