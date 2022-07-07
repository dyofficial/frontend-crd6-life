import { Link } from "react-router-dom";
import { IoIosHome, IoMdArrowDropdown } from "react-icons/io";
import { GrPower } from "react-icons/gr";
import { FaShoppingCart, FaGlobeAmericas } from "react-icons/fa";
import { BsFillMegaphoneFill } from "react-icons/bs";
import "../App.css";

const Navigation = ({ register }) => {
  console.log(register);
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
              <ul>
                <li>Balance: 0$</li>
                <li className="menu">
                  Menu
                  <IoMdArrowDropdown />
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
