import { useAuth } from "../context/useAuthContext";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import LoginHeader from "./LoginHeader";

const Login = () => {
  const { signWithGoogle } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    await signWithGoogle();
    history.push("/");
  };

  return (
    <div>
      <LoginHeader />
      <Button action={handleLogin} name="Sign in with Google" />
    </div>
  );
};
export default Login;
