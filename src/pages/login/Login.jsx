import "./login.scss";
import { Link } from "react-router-dom";
const Login = () => {

  const handleLogin = () => {
    console.log("login");
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hi! friends</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Bạn không có tài khoản ?</span>
          <Link to="/register">
          <button>Dăng ký</button>
          </Link>
        </div>
        <div className="right">
          <h1>Đăng nhập</h1>
          <form>
            <input type="text" placeholder="Tên đăng nhập" />
            <input type="password" placeholder="Mật khẩu" />
            <button onClick={handleLogin}>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;