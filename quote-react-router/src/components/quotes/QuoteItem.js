import { Link } from "react-router-dom";
import cssClasses from "./QuoteItem.module.css";

const QuoteItem = (props) => {
   return (
    <li className={cssClasses.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
