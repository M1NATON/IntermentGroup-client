import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import DocumentsPage from "../pages/DocumentsPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'documents',
                element: <DocumentsPage/>
            }
        ]
    }
])