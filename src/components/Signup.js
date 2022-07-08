import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Signup = ({ setRegister, register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6, "#2a313a", "#7e8795");
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError(true);
      setErrorMsg("Passwords do not match");
    } else {
      let item = { email, password };

      let result = await fetch(
        "https://whispering-badlands-40545.herokuapp.com/user/signup",
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
            Accept: "application",
          },
        }
      );
      result = await result.json();
      console.log(result);

      let user_captcha = document.getElementById("user_captcha_input").value;

      if (
        validateCaptcha(user_captcha) === true &&
        result.status === "Suceess"
      ) {
        setErrorMsg("Captcha Matched");
        loadCaptchaEnginge(6);
        document.getElementById("user_captcha_input").value = "";
        localStorage.setItem("user-info", JSON.stringify(result));
        setError(true);
        setErrorMsg("...redirecting to log in screen");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setTimeout(() => {
          setError(true);
        }, 3000);
        setErrorMsg("Captcha Does Not Match");
        document.getElementById("user_captcha_input").value = "";
      }

      if (result.status === "Suceess") {
        localStorage.setItem("user-info", JSON.stringify(result));
      } else {
        setError(true);
        setErrorMsg(result.message);
      }
    }

    // setUser({
    //   email: email,
    //   password: password,
    // });

    // console.log(user);
    // fetch("https://whispering-badlands-40545.herokuapp.com/user/signup", {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log("response: " + JSON.stringify(json));
    //   });
  };
  return (
    <div>
      <div>{error ? <p className="error">{errorMsg}</p> : ""}</div>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="top">
          <span className="reg">Registration</span>
        </div>
        <div className="credentials">
          <div className="input-area">
            <span>Email:</span>
            <br />
            <input
              type="text"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-area">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-area">
            <span>Confirm Password:</span>
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="captcha">
          <div className="input-area capcha">
            <LoadCanvasTemplate reloadColor="#414851" />
          </div>
          <div className="input-area">
            <span>Captcha</span>
            <br />
            <input
              type="text"
              placeholder="Captcha"
              id="user_captcha_input"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="buttons">
          <button className="signup-btn" type="submit">
            Sign up
          </button>
          <Link to="/">
            <button className="signup-btn" style={{ background: "#323842" }}>
              Login
            </button>
          </Link>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default Signup;
