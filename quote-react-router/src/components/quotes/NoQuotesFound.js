import { Link } from "react-router-dom";
import cssClasses from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={cssClasses.noquotes}>
      <p>No quotes found!</p>
      <Link to="/quotes/addnew" className="btn">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
