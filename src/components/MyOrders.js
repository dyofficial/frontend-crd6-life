import { useEffect } from "react";
import PageLayout from "./PageLayout";

const MyOrders = ({ setRegister }) => {
  useEffect(() => {
    setRegister(true);
  }, []);
  return (
    <PageLayout>
      <div>MyOrders</div>
    </PageLayout>
  );
};

export default MyOrders;
