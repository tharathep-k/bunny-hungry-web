import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import StartPage from "../pages/StartPage";

const router = createBrowserRouter([
  { path: "/", element: <StartPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/cart", element: <CartPage />},
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
