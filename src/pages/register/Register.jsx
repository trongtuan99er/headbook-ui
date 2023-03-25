import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import React from 'react'
import axios from "axios";

const Register = () => {

  const [ inputs, setInputs ] = React.useState({
    username: "",
    email: "",
    password: "",
    name: "",
  }) 
  const [ err, setErr ] = React.useState(false) 
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleRegister = async e => {
    e.preventDefault()
    try{
      await axios.post("https://headbook.onrender.com/api/auth/register", inputs)
      navigate('/login')
    }catch(err){
      setErr(err.response.data)
    }
  }
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
          <Link to="/login">
          <button>Đăng nhập</button>
          </Link>
        </div>
        <div className="right">
          <h1>Đăng ký</h1>
          <form>
            <input type="text" placeholder="Tên đăng nhập" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Mật khẩu" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Tên" name="name" onChange={handleChange}/>
            <span style={{fontSize: '12px', color: "red"}}>{err && err}</span>
            <button onClick={handleRegister}>Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;