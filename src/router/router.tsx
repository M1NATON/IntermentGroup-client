import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import DocumentsPage from "../pages/DocumentsPage.tsx";
import HandbooksPage from "../pages/HandbooksPage.tsx";
import PaymentPage from "../pages/PaymentPage.tsx";
import RequisitesPage from "../pages/RequisitesPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";


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
            },
            {
                path: 'products',
                element: <ProductsPage/>
            },
            {
                path: 'handbooks',
                element: <HandbooksPage/>
            },
            {
                path: 'payment',
                element: <PaymentPage/>
            },
            {
                path: 'requisites',
                element: <RequisitesPage/>
            }
        ]
    }
])