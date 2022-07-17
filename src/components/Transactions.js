import { useEffect } from "react";
import PageLayout from "./PageLayout";

const Transactions = ({ setRegister }) => {
  useEffect(() => {
    setRegister(true);
  }, []);
  return (
    <PageLayout>
      <div>Transactions</div>
    </PageLayout>
  );
};

export default Transactions;
