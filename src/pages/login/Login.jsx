import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import React, { useContext  } from "react";

const Login = () => {
  const { login } = useContext(AuthContext)
  const [ inputs, setInputs ] = React.useState({
    username: "",
    password: "",
  }) 
  const [ err, setErr ] = React.useState(false)
  const navigate  = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      await login(inputs);
      navigate('/')
    }catch(err){
      setErr(err.response.data)
    }
  };

  const handleChange = e => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
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
            <input type="text" placeholder="Tên đăng nhập" name="username" onChange={handleChange}/>
            <input type="password" placeholder="Mật khẩu" name="password" onChange={handleChange}/>
            <span style={{fontSize: '12px', color: "red"}}>{err && err}</span>
            <button onClick={handleLogin}>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;