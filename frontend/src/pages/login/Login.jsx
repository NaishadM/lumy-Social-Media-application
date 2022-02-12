import { useContext, useRef } from "react";
import "./login.css";

import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';


export default function Login() {
  const email = useRef();
  const password = useRef();


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lumy</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lumy-social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
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
            <button className="loginButton" type="submit" >
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
               Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
