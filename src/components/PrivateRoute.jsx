import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/useAuthContext";

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentUser ? <Component {...props} /> : <Redirect to="login" />;
      }}
    />
  );
};

export default PrivateRoute;
