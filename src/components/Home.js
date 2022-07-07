import { useEffect } from "react";
import Faq from "./Faq";
import Sidebar from "./Sidebar";

const Home = ({ setRegister }) => {
  useEffect(() => {
    setRegister(true);
  }, []);

  return (
    <div className="home-content">
      <div>
        <Sidebar />
      </div>
      <div className="faq-content">
        <Faq />
      </div>
    </div>
  );
};

export default Home;
