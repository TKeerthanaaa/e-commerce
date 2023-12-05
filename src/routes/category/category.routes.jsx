import "./category.styles.scss";

import { useParams } from "react-router-dom";

const Category = () => {
  const {category} = useParams()
  return <h1>Category-{category}</h1>;
};

export default Category;
