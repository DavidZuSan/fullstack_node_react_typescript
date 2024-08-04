import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import NewProducts, { action as newProductAction } from "./views/NewProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Default route
        element: <Products />,
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
