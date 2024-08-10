import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProducts, { action as newProductAction } from "./views/NewProducts";
import EditProduct, {
  loader as EditProductLoader,
  action as EditProductAction,
} from "./views/EditProduct";
import { action as deleteProductAction } from "./components/ProductDetails";

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
      {
        path: "productos/:id/editar", // ROA Pattern - Resource Oriented Design
        element: <EditProduct />,
        loader: EditProductLoader, // This will be called when the "/editar/:id" route is entered with a specific id parameter.
        action: EditProductAction, // This will be called when the "Editar Producto" button is clicked
      },
      {
        path: "productos/:id/eliminar", // ROA Pattern - Resource Oriented Design
        action: deleteProductAction,
      },
    ],
  },
]);

export default router;
