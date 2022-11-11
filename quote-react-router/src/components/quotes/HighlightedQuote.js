import cssClasses from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={cssClasses.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
