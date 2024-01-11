import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Forgotpassword from "./views/app/Authentication/forgotPassword";
import Resetpassword from "./views/app/Authentication/resetPassword";
import Signin from "./views/app/Authentication/signin";
import Customers from "./views/app/dashboards/customer";
import Dashboards from "./views/app/dashboards/dashboards";
import Merchants from "./views/app/dashboards/merchants";
import PotentialCustomers from "./views/app/dashboards/potentialCustomers";
import Product from "./views/app/dashboards/product";
import Services from "./views/app/dashboards/services";
import Commission from "./views/app/dashboards/commission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/forgot-password",
    element: <Forgotpassword />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboards />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/customers/potential-customers",
    element: <PotentialCustomers />,
  },
  {
    path: "/merchants",
    element: <Merchants />,
  },
  {
    path: "/transactions/product",
    element: <Product />,
  },
  {
    path: "/transactions/commission",
    element: <Commission />,
  }
]);

export default router;
