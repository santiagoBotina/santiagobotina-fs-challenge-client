import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {Home} from "@pages/home";
import {Top100} from "@pages/top100";
import {AVAILABLE_VIEWS} from "@utils/app.constants.ts";
import {SideBar} from "@components/sidebar";

const Layout = () => (
    <div className="min-h-screen min-w-screen flex">
        <SideBar viewsAvailable={AVAILABLE_VIEWS} />
        <div className="flex-1 w-full">
            <Outlet />
        </div>
    </div>
);

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'top',
                element: <Top100 />,
            },
        ],
        errorElement: <div>404 Not Found</div>,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
