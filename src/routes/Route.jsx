// import Layout from "../components/Layout/Layout";
// import Contact from "../components/Contact/Contact";
// import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
// import Profile from '../components/Profile/Profile';
import Register from "../components/Register/Register";
import ProfileLayout from "../components/Profile/ProfileLayout";
import CreateTeam from "../components/Profile/CreateTeam/CreateTeam";
import PrivateRoute from "../routes/PrivateRoute";
import Layout from "../components/Layout/Layout";
import CreateTask from "../components/Profile/CreateTask/CreateTask";
import ViewTask from "../components/Profile/ViewTask/ViewTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
    
    {
        path: "/profile",
        element: <PrivateRoute><ProfileLayout></ProfileLayout></PrivateRoute> ,
        children: [
            {
                path: "create-team",
                element: <CreateTeam></CreateTeam>
            },
            {
                path: "create-task",
                element: <CreateTask></CreateTask>
            },
            {
                path: "view-task",
                element: <ViewTask></ViewTask>
            }
        ]

    }
])


export default router;