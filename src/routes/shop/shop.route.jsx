import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components";
import Category from "../category/category.routes";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
