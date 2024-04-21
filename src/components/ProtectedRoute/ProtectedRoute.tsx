import { useSelector } from "react-redux";
import NotPermitted from "./NotPermitted";

const RoleBaseRoute = (props: any) => {
  const isAdminRoute = window.location.pathname.includes("admin");
  const currentUser = useSelector((state: any) => state.account.user);
  const userRole = currentUser.role.name;
  if (isAdminRoute && userRole === "SUPER_ADMIN") {
    return <>{props.children}</>;
  } else {
    return <NotPermitted />;
  }
};

const ProtectedRoute = (props: any) => {
  return (
    <>
      <RoleBaseRoute>{props.children}</RoleBaseRoute>
    </>
  );
};

export default ProtectedRoute;
