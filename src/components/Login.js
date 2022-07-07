import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = ({ setRegister, handleLogin, register }) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    // navigate("/home");
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) === true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "#2a313a", "#7e8795");
  }, []);

  return (
    <div>
      <div>{/* <Navigation register={register} /> */}</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="left">
          <div className="input-area">
            <span>Email:</span>
            <input type="text" placeholder="Email or login" />
          </div>
          <div className="input-area">
            {/* <span>Email</span>
            <input type="text" placeholder="Email or login" /> */}
            <LoadCanvasTemplate reloadColor="#414851" />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
        <div className="right">
          <div className="input-area">
            <span>Password:</span>
            <input type="password" placeholder="Password" />
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
