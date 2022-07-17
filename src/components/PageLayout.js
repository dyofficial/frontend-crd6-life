import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }) => {
  return (
    <div className="home-content">
      <div>
        <Sidebar />
      </div>
      <div className="faq-content">{children}</div>
    </div>
  );
};

export default PageLayout;
