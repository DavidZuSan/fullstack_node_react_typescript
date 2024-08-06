import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProducts, { action as newProductAction } from "./views/NewProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Default route
        element: <Products />,
        loader: productsLoader, // This will be called when the "/" route is entered
      },
      {
        path: "productos/nuevo",
        element: <NewProducts />,
        action: newProductAction, // This will be called when the "Agregar Producto" link is clicked
      },
    ],
  },
]);

export default router;
