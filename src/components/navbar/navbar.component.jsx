import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { signOutUser } from "../../utiles/firebase/index";
import { useUserGlobalContext } from "../../context/user.context";
import { useCartGlobalContext } from "../../context/cart.context";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Navbar = () => {
  const { currentUser } = useUserGlobalContext();
  const { isCartOpen } = useCartGlobalContext();

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <nav className="w-full px-4 shadow">
      <div className="container h-[6rem] flex item-center justify-between">
        <div className="flex">
          <img
            src="https://images.vexels.com/media/users/3/190571/isolated/preview/57188035d6f4b5f53e701082e7d55a54-mens-fashion-mans-figure.png"
            alt="logo"
            className="w-[95px] h-auto object-contain"
          />
          <span>Trendy Max</span>
        </div>
        <ul className="flex items-center">
          <li className="font-semibold text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold text-lg">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="font-semibold text-lg">
            <a href="/checkout">
              <RiShoppingBagLine />
            </a>
          </li>
          {currentUser ? (
            <li className="nav-item">
              <span className="nav-link" onClick={signOutHandler}>
                SignOut
              </span>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/auth">SignIn</Link>
            </li>
          )}
        </ul>
      </div>
      {isCartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navbar;
