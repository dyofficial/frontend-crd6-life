import { useState, useEffect, useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import { UserContext } from "./auth/UserContext";
import Balance from "./components/Balance";

function App() {
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);

  const [pageTitle, setPageTitle] = useState("Home");

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  let navigate = useNavigate();

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

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setLoggedIn(true);
    } else {
      navigate("/");
    }
  }, [localStorage.getItem("user-info")]);
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
      <UserContext.Provider value={value}>
        <Navigation register={register} />

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
          {loggedIn ? (
            <>
              <Route
                exact
                path="/home"
                element={<Home setRegister={setRegister} />}
              />
              <Route
                exact
                path="/balance"
                element={<Balance setRegister={setRegister} />}
              />
            </>
          ) : (
            ""
          )}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
