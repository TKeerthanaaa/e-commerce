import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { useCartGlobalContext } from "../../context/cart.Context";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Navbar = () => {
  const { currentUser } = useCartGlobalContext();

  const { isCartOpen } = useCartGlobalContext();
  const cartDropdownHandler = () => setIsCartOpen(!isCartOpen);

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
            <a href="/">Home</a>
          </li>
          <li className="font-semibold text-lg">
            <a href="/shop">Shop</a>
          </li>
          <li className="font-semibold text-lg">
            <a href="/checkout">
              <RiShoppingBagLine />
            </a>
          </li>
        </ul>
        <div className="font-medium text-xl">
          <button className="log">
            <a href="/auth">
              <FaRegUserCircle />
            </a>
          </button>
        </div>
      </div>
      {isCartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navbar;
