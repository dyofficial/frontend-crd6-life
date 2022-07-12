import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../auth/UserContext";
import { useAtom } from "jotai";
import { newUser } from "../auth/atom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [user, setUser] = useAtom(newUser);

  let navigate = useNavigate();

  // const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let item = { email, password };
    let result = await fetch(
      "https://whispering-badlands-40545.herokuapp.com/user/signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
          Accept: "application",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    setUser(result.data[0].email);

    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true && result.status === "SUCCESS") {
      setErrorMsg("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/home");
    } else {
      setError(true);
      setErrorMsg("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }

    if (result.status === "SUCCESS") {
      localStorage.setItem("user-info", JSON.stringify(result));
    } else {
      setError(true);
      setErrorMsg(result.message);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "#2a313a", "#7e8795");
  }, []);

  return (
    <div>
      <div>{error ? <p className="error">{errorMsg}</p> : ""}</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="left">
          <div className="input-area">
            <span>Email:</span>
            <input
              type="text"
              placeholder="Email or login"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-area">
            <LoadCanvasTemplate reloadColor="#414851" />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
        <div className="right">
          <div className="input-area">
            <span>Password:</span>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-area">
            <span>Captcha</span>
            <input
              type="text"
              placeholder="Captcha"
              id="user_captcha_input"
              autoComplete="off"
            />
          </div>
          <Link to="/signup">
            <button className="signup-btn" style={{ background: "#323842" }}>
              Sign up
            </button>
          </Link>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Login;
