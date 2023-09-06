import Layout from "../components/Layout/Layout";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Profile from '../components/Profile/Profile';
import Register from "../components/Register/Register";
import ProfileLayout from "../components/Profile/Profile";

const router =createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/sign-in",
                element: <Login></Login>,
            },
            // {
            //     path: "/profile",
            //     element: <Profile></Profile>,
            // },
            {
                path: "/register",
                element:<Register></Register>,
            }
        ]
    },
    {
        path: "/profile",
        element: <ProfileLayout></ProfileLayout>
    }
])


export default router;