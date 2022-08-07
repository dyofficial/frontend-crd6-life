import { useEffect, useState } from "react";
import { RiBankFill } from "react-icons/ri";
import PageLayout from "./PageLayout";
import { FaShoppingCart } from "react-icons/fa";

const Bank = ({ setRegister, displayedBank }) => {
  useEffect(() => {
    setRegister(true);
  }, []);

  console.log("first", displayedBank);

  return (
    <PageLayout>
      <div className="bank-name">
        <RiBankFill color="#ffc001" size="49px" />
        <span>{displayedBank}</span>
      </div>
      <div className="desc-block">
        <span>Description:</span>
        <span>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</span>
      </div>
      <form className="bank-form">
        <label>Price</label>
        <input type="text" placeholder="from" class="filter" />-
        <input type="text" placeholder="to" class="filter" />
        <label>Total Balance</label>
        <input type="text" placeholder="balance" class="filter" />
        <input type="text" placeholder="Account" />
        <button>Search</button>
      </form>
      <table className="table">
        <tr>
          <th>Total Balance</th>
          <th>Accounts</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>$150</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Cleveland</td>
          <td>Brown</td>
          <td>$250</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>$150</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>Cleveland</td>
          <td>Brown</td>
          <td>$250</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
      </table>
    </PageLayout>
  );
};

export default Bank;
