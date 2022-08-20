import { useEffect, useState } from "react";
import { RiBankFill } from "react-icons/ri";
import PageLayout from "./PageLayout";
import { FaShoppingCart } from "react-icons/fa";

const Bank = ({ setRegister, displayedBank }) => {
  const [worth, setWorth] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    setRegister(true);
  }, []);

  console.log("first", displayedBank);

  let amount = Math.floor(Math.random() * 10000);
  console.log(amount);

  const priceGenerator = () => {
    let displayPrice = Math.floor(Math.random() * 1000);
    console.log(displayPrice);
  };

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
        <input type="text" placeholder="from" className="filter" />-
        <input type="text" placeholder="to" className="filter" />
        <label>Total Balance</label>
        <input type="text" placeholder="balance" className="filter" />
        <input type="text" placeholder="Account" />
        <button className="search">Search</button>
      </form>
      <table className="table">
        <tr>
          <th>Total Balance</th>
          <th>Accounts</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>$45237</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$455</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$27387</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$230</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$35230</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$334</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$65290</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$570</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$77800</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$210</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$56870</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$521</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$40700</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$480</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$12240</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$300</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$45237</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$455</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$27387</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$230</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$35230</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$334</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$65290</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$570</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$77800</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$210</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$56870</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$521</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$40700</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$480</td>
          <td className="buy">
            <FaShoppingCart color="#fff" />
            <span>Buy</span>
          </td>
        </tr>
        <tr>
          <td>$12240</td>
          <td>SAVINGS + CHECKINGS + INFO + EMAIL ACCESS + LOGIN PASS</td>
          <td>$300</td>
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
