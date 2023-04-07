import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Booking from "../pages/booking/Booking";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Error from "../pages/error/Error";
import CategoryProducts from "../pages/categoryProducts/CategoryProducts";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: "/category/:id",
                element: <CategoryProducts></CategoryProducts>
            },
            {
                path: "/bookings",
                element: <Booking></Booking>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/about",
                element: <About></About>
            },
        ]
    }
])