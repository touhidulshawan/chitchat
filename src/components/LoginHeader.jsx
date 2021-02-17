import Banner from "../assets/banner.svg";
import Logo from "../assets/Logo.svg";
const LoginHeader = () => {
  return (
    <div>
      <div>
        <img src={Banner} alt="Banner" />
      </div>
      <div>
        <div>
          <img src={Logo} alt="logo" />
          <h1>Chit Chat</h1>
        </div>
      </div>
    </div>
  );
};
export default LoginHeader;
