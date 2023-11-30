import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/main.scss";

import { UserProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.context";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
