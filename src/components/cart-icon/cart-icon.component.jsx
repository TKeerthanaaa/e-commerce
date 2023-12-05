import "./cart-icon.styles.scss";

import { useCartGlobalContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useCartGlobalContext();

  const cartDropdownHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count" onClick={cartDropdownHandler}>
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
