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
    <div className="bg-gray-100 h-screen p-4 flex flex-col justify-items-center items-center md:w-8/12 md:m-auto md:shadow-md md:rounded-md md:mt-16 md:h-full md:border-4 md:border-gray-700">
      <LoginHeader />
      <Button
        classes="mt-8 mb-3 bg-blue-600 py-4 text-blue-100 rounded px-8 w-full md:w-4/12 md:mb-6 uppercase tracking-wide text-center"
        action={handleLogin}
        name="Sign in with Google"
      />
    </div>
  );
};
export default Login;
