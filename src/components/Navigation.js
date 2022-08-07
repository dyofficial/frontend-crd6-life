import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { displayedBank, faqToggle, newUser } from "../auth/atom";
import { IoIosHome, IoMdArrowDropdown } from "react-icons/io";
import { GrPower } from "react-icons/gr";
import { FaShoppingCart, FaGlobeAmericas } from "react-icons/fa";
import { BsFillMegaphoneFill } from "react-icons/bs";
import "../App.css";
import { UserContext } from "../auth/UserContext";

const Navigation = ({ register, displayedBank, setDisplayedBank }) => {
  const [dropDown, setDropDown] = useState(false);
  const [bankDrop, setBankDrop] = useState(false);
  const [faq, setFaq] = useAtom(faqToggle);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let userObject = JSON.parse(localStorage.getItem("user-info"));

    if (userObject) {
      let currentUser = userObject.data[0].email;
      console.log(currentUser);
      setUser(currentUser);
    }
  });

  const banks = [
    "Atom Bank",
    "Goldman Sachs International Bank",
    "JPMorgan Chase",
    "Bank of Scotland plc",
    " National Westminster Bank Plc",
    "Axis Bank UK Limited",
    "Arbuthnot Latham &amp; Co Limited",
    "J.P. Morgan Securities",
    "ICBC",
    "Cambridge &amp; Counties Bank Limited",
    "AIB Group",
    "Cater Allen Limited",
    "HSBC Bank Plc",
    "Paragon Bank Plc",
    "BIRA Bank",
    "Unity Trust Bank",
    "Bank of Ireland",
    "Credit Suisse International",
    "Crown Agents Bank",
    "Gatehouse Bank",
    "Hampshire Trust Bank",
    "ClearBank Ltd",
    "Lloyds Bank",
    "Havin Bank Ltd",
    "OakNorth Bank Plc",
    "OneSavings Bank",
    "Alpha Bank",
    "Hampshire Trust Bank",
    "ClearBank",
    "Metro Bank PLC",
    "Secure Trust Bank",
    "Santander UK",
    "Unity Trust Bank",
    "Reliance Bank",
    "Wesleyan Bank",
    " BankUnited",
    "East West Bank",
    "Raymond James",
    "Commerce Bancshares",
    " Texas Capital Bank",
    "New York Community Bank",
    "CIBC Bank USA",
    "CIT Group",
    "Credit Suisse",
    "City National Bank",
    "Ally Financial",
    "Deutsche Bank",
    "People's United Financial",
    "SVB Financial Group",
    "First Horizon National Corporation",
    "Huntington Bancshares",
    "M&amp;T Bank",
    "Regions Financial Corporation",
    "Santander Bank",
    "RBC Bank",
    "Barclays",
    "Ameriprise",
    "Metro Bank PLC",
    "ClearBank",
    "Chime Bank",
    "Northern Trust",
    "Comerica",
    "UBS",
    "KeyCorp",
    "Discover Financial",
    "Citizens Financial Group",
    "BMO Harris Bank",
    "American Express",
    "PayPal Business",
    "USAA",
    "Fifth Third Bank",
    "HSBC Bank USA",
    "State Street Corporation",
    "Woodforest",
    "Capital One",
    "U.S. Bancorp",
    "TD Bank",
    "Truist Financial",
    "The Bank of New York Mellon",
    "Citigroup",
    "PNC Financial Services",
    "Morgan Stanley",
    "JPMorgan Chase",
    "Wells Fargo",
    "Charles Schwab Corporation",
    "Goldman Sachs",
    "Monzo Bank Ltd",
    "Starling Bank",
    "Sainsbury's Bank",
    "Ulster Bank",
    "Alliance Trust Savings Limited",
    "Northern Trust Global",
    "Tandem Bank",
    "Masthaven Bank",
    "PCF Group",
    " Gatehouse Bank",
    "ANZ Bank (Europe) Limited",
    "Scotiabank Europe",
    "Vanquis Bank",
    "Starling Bank Limited",
    "Wyelands Bank Plc",
    "Yorkshire Bank",
    "EXTRACTION",
  ];

  const handleBankList = (id) => {
    setDisplayedBank(id);
    console.log(displayedBank);
    setBankDrop(!bankDrop);
    console.log(bankDrop);
  };
  // console.log(bankDrop);

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
              <>
                <div className="nav-links">
                  <ul>
                    <li onClick={() => setBankDrop(!bankDrop)}>
                      <div
                        className=""
                        // !dropDown ? "menu-container inactive" : "menu-container"

                        // onMouseEnter={() => setDropDown(true)}
                        // onMouseLeave={() => setDropDown(false)}
                        // onClick={() => setDropDown(!dropDown)}
                      >
                        <div>
                          <span>USA BANK + INFO</span>
                          <IoMdArrowDropdown />
                        </div>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
                <ul
                  // className={!dropDown ? "menu-links off" : "menu-links"}
                  onMouseEnter={() => setDropDown(true)}
                  className={bankDrop ? "drop bank-list" : "bank-list"}
                >
                  {banks.map((bank) => (
                    <Link to="/pages">
                      <li onClick={() => handleBankList(bank)}>{bank}</li>
                    </Link>
                  ))}
                </ul>
              </>
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
                      <Link to="/profile">
                        <li>Profile {user}</li>
                      </Link>
                      <div className="underline"></div>
                      <Link to="/orders">
                        <li>My orders</li>
                      </Link>
                      <Link to="/cancels">
                        <li>My cancels</li>
                      </Link>
                      <div className="underline"></div>
                      <Link to="/transactions">
                        <li>Transactions</li>
                      </Link>

                      <Link to="/balance">
                        <li>Fill up through bitcoin</li>
                      </Link>
                      <Link to="/balance_cash">
                        <li>Fill up through bitcoin CASH</li>
                      </Link>
                    </ul>
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
