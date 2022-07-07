import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Signup = ({ setRegister, register }) => {
  // const [email, setEmail] = useState("");

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [captcha, setCaptcha] = useState("");

  // const handleSignup = (e) => {
  //   setRegister(true);
  //   e.preventDefault();
  //   console.log("signup");
  // };

  const handleSignup = (e) => {
    e.preventDefault();
    setUser({
      email: email,
      password: password,
      captcha: captcha,
      confirmPassword: confirmPassword,
    });

    console.log(user);
    fetch(
      "https://backendlessappcontent.com/9A5C8836-ECD6-CE20-FFA4-4D448DFEF000/AA4BB16A-5073-4543-B963-8ADF46477DA0/files/api-docs/data/Users_SWAGGER_2.0_v1.0.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("response: " + JSON.stringify(json));
      });
  };
  return (
    <div>
      <form className="signup-form">
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
          <div className="input-area">
            <span>Catcha</span>
            <br />
            <input type="text" placeholder="Captcha" />
          </div>
          <div className="input-area">
            <span>Captcha</span>
            <br />
            <input
              type="text"
              placeholder="Captcha"
              onChange={(e) => setCaptcha(e.target.value)}
            />
          </div>
        </div>
        <div className="buttons">
          <button className="signup-btn" onClick={handleSignup} type="submit">
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
