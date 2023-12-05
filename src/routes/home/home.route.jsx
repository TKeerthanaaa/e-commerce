import "./home.style.scss";
import { Link } from "react-router-dom";

import { Directory } from "../../components";

import { categories } from "../../constants";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="images">
          <img
            className="fashion"
            src="https://i.pinimg.com/550x/6d/c4/40/6dc440bb3a124d7b28ccbc960e011875.jpg"
            alt="fashion"
          />
          <img
            className="watch"
            src="https://5.imimg.com/data5/SELLER/Default/2022/11/XP/EE/UY/163122041/men-fashion-accessories-500x500.jpg"
            alt="watch"
          />
        </div>

        <div className="words">
          <h2>
            "You don't find a style <span> A style find you.</span>
          </h2>
        </div>
      </div>
      <Directory categories={categories} />;
      <Link to="/shop" className="btn">
        Go to Shop
      </Link>
    </>
  );
};

export default Home;
