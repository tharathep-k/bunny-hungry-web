import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import FooterFrom from "../features/home/FooterForm";
import FooterFromAdmin from "../features/admin/FooterFormAdmin"
import AdminHomePage from "../pages/AdminHomePage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfileAdminPage from "../pages/ProfileAdminPage";
import ProfilePage from "../pages/ProfilePage";
import StartPage from "../pages/StartPage";

const router = createBrowserRouter([
  { index: true, element: <StartPage /> },
  { path: "/", element: <StartPage /> },
  {
    path: "/",
    element: (
      <div className="overflow-x-hidden">
        <Outlet />
        <FooterFrom />
      </div>
    ),
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <div className="overflow-x-hidden">
        <Outlet />
        <FooterFromAdmin />
      </div>
    ),
    children: [
      { path: "/profileadmin", element: <ProfileAdminPage /> },
      { path: "/admin", element: <AdminHomePage /> },
    ],
  },
  
 
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
