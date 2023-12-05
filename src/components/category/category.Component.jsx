import "./category.styles.scss";

import { useNavigate } from "react-router-dom";

const Category = ({ id, title, imageUrl }) => {
  const navigate = useNavigate();
  const navigateHandler = (category) => {
    navigate(`/shop/${category}`);
  };
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div
        className="category-body-container"
        onClick={() => navigateHandler({ title })}
      >
        <h2>{title}</h2>
        <h3>Shop Now</h3>
      </div>
    </div>
  );
};

export default Category;
