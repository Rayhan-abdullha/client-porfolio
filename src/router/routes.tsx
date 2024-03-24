import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }, {
                path: "*",
                element: <NotFound />
            }
        ]
    },
]);

export default router