import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { Animal } from "./pages/Animal";

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
            },
            {
                path:"/animals/:paramsId",
                element: <Animal/>
            }
        ]
    }
])