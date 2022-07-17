import React, { useEffect } from "react";

import PageLayout from "./PageLayout";

const BtcCash = ({ setRegister }) => {
  useEffect(() => {
    setRegister(true);
  }, []);
  return (
    <PageLayout>
      <div>BtcCash</div>
    </PageLayout>
  );
};

export default BtcCash;
