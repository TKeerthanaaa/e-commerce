import { BsCart4 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
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
        <ul className="flex gap-12 items-center">
          <li className="font-semibold text-lg">
            <a href="/">Home</a>
          </li>
          <li className="font-semibold text-lg">
            <a href="/shop">Shop</a>
          </li>
          <li className="font-semibold text-lg">
            <a href="/cart">Cart</a>
          </li>
        </ul>
        <div className="flex gap-[2rem] font-medium text-xl">
          <button className="log">
            <a href="/auth">
              <FaRegUserCircle />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
