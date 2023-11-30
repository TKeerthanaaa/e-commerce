import Category from "../category/category.Component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category {...category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
