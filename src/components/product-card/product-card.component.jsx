import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useCartGlobalContext } from "../../context/cart.Context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useCartGlobalContext();

  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart({ product });
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <Button
        buttonText="Add to Card"
        buttonType="inverted"
        type="button"
        onClick={addProductToCart}
      />
    </div>
  );
};

export default ProductCard;
