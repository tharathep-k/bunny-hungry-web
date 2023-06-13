import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// export default function RedirectIfAuthenticated({ children }) {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   if (isAuthenticated) {
//     return <Navigate to = "/home" />;
//   }
//   return children;
// }

export default function RedirectIfAuthenticated({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isRole = useSelector((state) => state.auth.user?.role == "admin");
  if (isAuthenticated && isRole) {
    return <Navigate to="/admin" />;
  } else if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return children;
}
