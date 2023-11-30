import { Navbar } from "./components";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root, Home, Shop, Cart, Authentication, ErrorPage } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      { path: "auth", element: <Authentication /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
