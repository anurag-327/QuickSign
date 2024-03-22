import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Dashboard";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Admin from "./Admin/Admin";
import ContextAPI from "./Context/ContextAPI";
import AdminContextAPI from "./Context/AdminContext";
import AuthHome from "./auth/Home";
import Application from "./pages/Application";
import TestUi from "./pages/TestUi";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/auth/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: (
        <ContextAPI>
          <Home />
        </ContextAPI>
      ),
    },
    {
      path: "/testUI",
      element: <TestUi />,
    },
    {
      path: "/admin",
      element: (
        <AdminContextAPI>
          <Admin />
        </AdminContextAPI>
      ),
    },
    {
      path: "/auth",
      element: <AuthHome />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/dashboard/application/:id",
      element: <Application />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
