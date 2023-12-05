import { Routes, Route } from "react-router-dom";
import { CategoryPreview } from "../../components";
import Category from "../category/category.routes";

const Shop = () => {
  return (
    <Routes>
      <Route
        index
        element={<CategoryPreview title="Products" products={[]} />}
      />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
