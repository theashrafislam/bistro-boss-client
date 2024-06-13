import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItems/AddItem";
import AdminRouter from "./AdminRouter";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: "/order/:category",
                element: <Order/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/secret",
                element: <PrivateRouter><Secret/></PrivateRouter>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRouter><Dashboard/></PrivateRouter>,
        children: [
            {
                path: 'user-home',
                element: <UserHome/>
            },
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: 'payment',
                element: <Payment/>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory/>
            },

            //admin router
            {
                path: 'admin-home',
                element: <AdminRouter><AdminHome/></AdminRouter>
            },
        {
                path: 'add-items',
                element: <AdminRouter><AddItem/></AdminRouter>
            },
            {
                path: 'all-users',
                element: <AdminRouter><AllUsers/></AdminRouter>
            },
            {
                path: 'update-item/:id',
                element: <AdminRouter><UpdateItem/></AdminRouter>,
                loader: ({params}) => fetch(`https://bistro-boss-server-pi-ruby.vercel.app/menu/${params.id}`)
            },
            {
                path: 'manage-items',
                element: <AdminRouter><ManageItem/></AdminRouter>
            }
        ]
    },
]);

export default router;

