import { useEffect } from "react";
import PageLayout from "./PageLayout";

const Cancels = ({ setRegister }) => {
  useEffect(() => {
    setRegister(true);
  }, []);
  return (
    <PageLayout>
      <div>Cancels</div>
    </PageLayout>
  );
};

export default Cancels;
