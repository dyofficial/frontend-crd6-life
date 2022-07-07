import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";

function App() {
  const [register, setRegister] = useState(false);

  const [pageTitle, setPageTitle] = useState("Home");

  const titleMap = [
    { path: "/", title: "crd6.life" },
    { path: "/home", title: "FAQs" },
    { path: "/signup", title: "Sign Up" },
  ];

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  const handleSignup = (e) => {
    setRegister(true);
    e.preventDefault();
    console.log("signup");
  };

  const handleLogin = () => {
    console.log("login");
    setRegister(true);
    console.log(register);
  };

  return (
    <div className="App">
      <Navigation register={register} />
      {/* {!register ? (
        <Login
          setRegister={setRegister}
          handleLogin={handleLogin}
          register={register}
        />
      ) : (
        <Signup setRegister={setRegister} register={register} />
      )} */}
      <Routes>
        <Route path="/*">
          <Route
            index
            element={
              <Login
                setRegister={setRegister}
                handleLogin={handleLogin}
                register={register}
              />
            }
          />
        </Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/home"
          element={<Home setRegister={setRegister} />}
        />
      </Routes>
    </div>
  );
}

export default App;
