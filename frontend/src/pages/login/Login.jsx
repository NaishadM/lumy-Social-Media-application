import { useContext, useRef } from "react";
import "./login.css";
import { loginCall}  from "../../apiCalls";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching,error,dispatch}=useContext(AuthContext)
   const handleForm=(e)=>{
   e.preventDefault();
   loginCall({email:email.current.value,password:password.current.value},dispatch)

   }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lumy</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lumy-social.
          </span>
        </div>
        <div className="loginRight" >
          <form className="loginBox" onSubmit={handleForm}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>{isFetching?<CircularProgress color="success" size='rem'/>:"Log In"}
          
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button className="loginRegisterButton" disabled={isFetching}>
               
               {isFetching?<CircularProgress color="success" size='rem'/>:"Create a New Account"}
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}
