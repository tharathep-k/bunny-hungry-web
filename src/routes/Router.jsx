import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  { path: "/", element: <HomePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
