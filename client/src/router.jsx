import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./page";
import { CustomerDetail, Error } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "customer/:id", element: <CustomerDetail /> },
    ],
  },
]);
export { router };
