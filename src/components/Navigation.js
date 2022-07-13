import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { faqToggle, newUser } from "../auth/atom";
import { IoIosHome, IoMdArrowDropdown } from "react-icons/io";
import { GrPower } from "react-icons/gr";
import { FaShoppingCart, FaGlobeAmericas } from "react-icons/fa";
import { BsFillMegaphoneFill } from "react-icons/bs";
import "../App.css";
import { UserContext } from "../auth/UserContext";

const Navigation = ({ register }) => {
  const [dropDown, setDropDown] = useState(false);
  // const { user, setUser } = useContext(UserContext);
  const [faq, setFaq] = useAtom(faqToggle);
  const [user, setUser] = useAtom(newUser);

  const profileToggle = () => {
    setFaq(false);
    console.log("first");
  };

  console.log(user);

  const navLinks = [
    "USA BANK + INFO",
    "USA BANK (Logpass)",
    "Other",
    "CreditCards(SALE!)",
    "Logs from botnet",
    "CreditCards",
    "Lookup SSN/DOB",
  ];
  const profileLinks = ["Balance: $0", "Menu"];

  return (
    <div>
      <div className="home">
        <div className="home-container">
          <div className="left-nav">
            <div className="content">
              {register ? (
                <Link to="/home">
                  <IoIosHome color="white" size="30px" />
                </Link>
              ) : (
                <Link to="/">
                  <IoIosHome color="white" size="30px" />
                </Link>
              )}
            </div>
            {register ? (
              <div className="nav-links">
                <ul>
                  {navLinks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          {register ? (
            <div className="profile-links">
              <ul className="profile-ul">
                <li>Balance: $0</li>
                <li>
                  <div
                    className={
                      !dropDown ? "menu-container inactive" : "menu-container"
                    }
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                    onClick={() => setDropDown(!dropDown)}
                  >
                    <div className="menu">
                      <span>Menu</span>
                      <IoMdArrowDropdown />
                    </div>
                    <ul
                      className={!dropDown ? "menu-links off" : "menu-links"}
                      onMouseEnter={() => setDropDown(true)}
                    >
                      <li onClick={profileToggle}>Profile {user}</li>
                      <div className="underline"></div>

                      <li>My orders</li>
                      <li>My cancels</li>
                      <div className="underline"></div>
                      <li>Transactions</li>
                      <Link to="/balance">
                        <li>Fill up through bitcoin</li>
                      </Link>
                      <li>Fill up through bitcoin CASH</li>
                    </ul>
                    {/* {dropDown ? (
                      <ul className="dropdown">
                        <li>{user}</li>
                        <li>boy</li>
                        <li>boy</li>
                      </ul>
                    ) : (
                      ""
                    )} */}
                  </div>
                </li>

                <div className="icons">
                  <FaShoppingCart color="white" size="20px" />
                  <BsFillMegaphoneFill color="white" size="20px" />
                  <FaGlobeAmericas color="white" size="20px" />
                  <GrPower color="white" size="20px" />
                </div>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
