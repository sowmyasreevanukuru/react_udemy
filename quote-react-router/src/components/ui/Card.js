import cssClasses from "./Card.module.css";

const Card = (props) => {
  return <div className={cssClasses.card}>{props.children}</div>;
};

export default Card;
