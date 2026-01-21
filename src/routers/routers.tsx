import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Registration from "../pages/Registration";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
]);
export default router;
