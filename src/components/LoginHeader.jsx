import Banner from "../assets/banner.svg";
import Logo from "../assets/Logo.svg";
const LoginHeader = () => {
  return (
    <div>
      <div className="my-5 px-4 md:w-6/12 m-auto">
        <img src={Banner} alt="Banner" />
      </div>
      <div>
        <div className="flex items-center justify-items-center text-center mt-6 mb-3">
          <img className="w-14 ml-auto" src={Logo} alt="logo" />
          <h1 className="mr-auto text-2xl">Chit Chat</h1>
        </div>
      </div>
    </div>
  );
};
export default LoginHeader;
