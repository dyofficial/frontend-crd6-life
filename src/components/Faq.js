import { VscQuestion } from "react-icons/vsc";

const Faq = () => {
  return (
    <div className="content_main">
      <div className="faq-top">
        <VscQuestion color="#ffc000" size="50px" fontWeight="bold" />
        <h3 className="main__title">FAQ</h3>
      </div>
      <h4 className="text__faq">Welcome to the private shop Crd.life!</h4>
      <span className="text__faq">
        Our store boasts a self-written engine, anti-DDoS system,
        abuzoustoychivym server. Do not keep any logs! <br />
        Attention! New return format. After buying the goods, you will have a
        countdown on the return time, at the moment it is 2 hours, which is
        enough to check your account. Please specify the correct gills and
        always attach screenshots, otherwise the return will be denied! <br />
        Clients ' personal data is stored in a database with non-standard
        encryption and guaranteed security. <br />
        3. It is forbidden to transfer their accounts and link to the shop 3rd
        parties <br />
        4. For all questions, please contact the chat directly in the shop, or
        in wellsfargo@exploit.im
        <br /> 5. Replacement of nevalid - return the cost of the account to the
        account in your personal account <br />
        6. Inactive for a month accounts - delete! <br />
        7. Balance from the store - not displayed <br />
        8. For non-compliance with the rules - account deletion without the
        right of restoration.
        <br /> ACCORDING TO THE RULES OF REFUND WRITING AND SPECIFY IN THE GILLS
        BEFORE YOU BUY!
      </span>
    </div>
  );
};

export default Faq;
