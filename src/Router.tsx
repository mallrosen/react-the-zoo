import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>   
               },
            {
             path: "/animals",
             element: <Animals/>   
            }
        ]
    }
])