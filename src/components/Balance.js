import { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import Sidebar from "./Sidebar";

const Balance = ({ setRegister }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [copyText, setCopyText] = useState(
    "3NkiTrMaLHetDNhMDVxZxDBBLVW8sdee4N"
  );

  useEffect(() => {
    setRegister(true);
  }, []);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home-content">
      <div>
        <Sidebar />
      </div>
      <div className="faq-content">
        <div className="bitcoin">
          <div className="balance-head">
            <FaBitcoin color="#fdbf00" size="50px" />
            <span className="bh-head">Bitcoin. Improve Balance </span>
          </div>
          <span className="min-deposit">Minimum deposit 50 USD</span>
          <div className="parent-div">
            <div className="btc-content">
              <div className="btc-container">
                <div className="usd-amt">
                  <span className="btc-txt">Desired amount of payment ($)</span>
                  <input type="text" className="amount" value="100" />
                </div>
                <div className="converter">
                  <span className="btc-txt">Need to transfer BTC</span>
                  <span>0.00536928 0.00536928</span>
                </div>
              </div>
              <div className="item_info__balance ">
                <span>
                  Your BTC address:{" "}
                  <span className="btc-wallet">{copyText}</span>
                  <BiCopy onClick={handleCopyClick(copyText)} />
                </span>
              </div>
              <div className="item_info__balance ">
                <span>Commission for translation: 1% + 0.00008001 BTC</span>
              </div>
              <div className="item_info__balance ">
                <span>Rate BTC: 18,998.61$</span>
              </div>
            </div>
            <div className="attention">
              <span>
                Attention! You can send any amount to the purse purse and these
                funds will immediately go to your personal account. The
                conversion rate in USD currency is updated from blockchain.info
                at the time of receipt of funds to the account. Track your funds
                on your payments by on the "Transactions" page
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
