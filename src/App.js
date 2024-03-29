import { useState, useEffect, useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import { UserContext } from "./auth/UserContext";
import Balance from "./components/Balance";
import MyOrders from "./components/MyOrders";
import Transactions from "./components/Transactions";
import Cancels from "./components/Cancels";
import BtcCash from "./components/BtcCash";
import Bank from "./components/Bank";

function App() {
  const [register, setRegister] = useState(false);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [displayedBank, setDisplayedBank] = useState("");

  const [pageTitle, setPageTitle] = useState("Home");

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  let navigate = useNavigate();

  const titleMap = [
    { path: "/", title: "crd6.life" },
    { path: "/home", title: "FAQs" },
    { path: "/signup", title: "Sign Up" },
    { path: "/balance", title: "Balance" },
    { path: "/profile", title: "Profile" },
    { path: "/orders", title: "My Orders" },
    { path: "/transactions", title: "Transactions" },
    { path: "/cancels", title: "My Cancels" },
    { path: "/balance_cash", title: "Bitcoin CASH.Improve Balance" },
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
        <Navigation
          register={register}
          displayedBank={displayedBank}
          setDisplayedBank={setDisplayedBank}
        />

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
              <Route
                exact
                path="/profile"
                element={<Profile setRegister={setRegister} />}
              />
              <Route
                exact
                path="/orders"
                element={<MyOrders setRegister={setRegister} />}
              />
              <Route
                exact
                path="/transactions"
                element={<Transactions setRegister={setRegister} />}
              />
              <Route
                exact
                path="/cancels"
                element={<Cancels setRegister={setRegister} />}
              />
              <Route
                exact
                path="/balance_cash"
                element={<BtcCash setRegister={setRegister} />}
              />
              <Route
                exact
                path="/pages"
                element={
                  <Bank
                    setRegister={setRegister}
                    displayedBank={displayedBank}
                    setDisplayedBank={setDisplayedBank}
                  />
                }
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
