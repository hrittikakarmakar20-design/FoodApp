import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Menu from "../pages/Menu";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import Chef from "../pages/Chef";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Singleblogpage from "../pages/Singleblogpage";
// import Addcart from "../pages/Addcart";
const Addcart = lazy(() => import("../pages/Addcart"));
import Protectedroute from "../layout/Protectedroute";
import DynamicLoading from "../components/Dynamicloading";
import Addproduct from "../pages/admin/Addproduct";
import Dashboard from "../pages/admin/Dashboard";
import Product from "../pages/admin/Product";
// import Wishlist from "../pages/Wishlist";
const Wishlist = lazy(() => import("../pages/Wishlist"));
const WrapperAdmin = lazy(() => import("../layout/admin/Wrapper"));

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "chef",
        element: <Chef />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "single-blog",
        element: <Singleblogpage />,
      },
    ],
  },
  {
    path: "",
    element: <Protectedroute />,
    children: [
      {
        path: "/cart",
        element: (
          <Suspense fallback={<DynamicLoading />}>
            <Addcart />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback={<DynamicLoading />}>
            <Wishlist />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <Protectedroute />,
    children: [
      {
        path: "",
        element: <WrapperAdmin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            // errorElement: <ErrorBoundery />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "product/add",
            element: <Addproduct />,
          },
          {
            path: "product/edit/:id",
            element: <Addproduct />,
          },
        ],
      },
    ],
  },
]);

export default Routes;
