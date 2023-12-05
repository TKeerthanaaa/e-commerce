import { createContext, useContext, useEffect, useState } from "react";

import { SHOP_DATA } from "../constants";

// import { getCategoriesAndDocuments } from "../utiles/firebase/index";

const CategoriesContext = createContext({
  shopData: [],
});

const CategoriesProvider = ({ children }) => {
  const [shopData, setShopData] = useState(SHOP_DATA);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setCategoriesMap(categoryMap);
  //   };

  //   getCategories();
  // }, []);

  const value = { shopData, setShopData };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategoriesGlobalContext = () => {
  return useContext(CategoriesContext);
};

export { CategoriesContext, CategoriesProvider, useCategoriesGlobalContext };
