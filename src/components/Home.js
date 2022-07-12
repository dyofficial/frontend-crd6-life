import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { faqToggle } from "../auth/atom";
import Profile from "./Profile";
import Faq from "./Faq";
import Sidebar from "./Sidebar";

const Home = ({ setRegister }) => {
  const [faq, setFaq] = useAtom(faqToggle);

  useEffect(() => {
    setRegister(true);
  }, []);

  return (
    <div className="home-content">
      <div>
        <Sidebar />
      </div>
      <div className="faq-content">
        {faq ? <Faq /> : <Profile setFaq={setFaq} />}
      </div>
    </div>
  );
};

export default Home;
