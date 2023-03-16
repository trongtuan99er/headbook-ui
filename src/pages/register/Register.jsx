import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Headbook Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Bạn đã có tài khoản ?</span>
          <a href="/login">
          <button>Đăng nhập</button>
          </a>
        </div>
        <div className="right">
          <h1>Đăng ký</h1>
          <form>
            <input type="text" placeholder="Tên đăng nhập" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật khẩu" />
            <input type="text" placeholder="Tên" />
            <button>Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;