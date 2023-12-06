import "./Form.css";
import TitleSection from "../TitleSection/TitleSection";

const Form = () => {
  return (
    <div className="newsletter-container container">
      <TitleSection title="Stay Updated With The Latest News To Get More Qualified Leads" section="Newsletter" />
      <form>
        <div className="input-email-container">
          <input type="text" id="userEmail" required={true} />
          <label htmlFor="userEmail" className="email-label">
            Email
          </label>
        </div>
        <div className="conditions-container">
          <input type="checkbox" id="termsConditions" />
          <label htmlFor="termsCoditions">
            I've read and agree to App's written <a href="#home">Privacy Policy</a> and <a href="#home">Terms Conditions</a>
          </label>
        </div>
        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Form;
