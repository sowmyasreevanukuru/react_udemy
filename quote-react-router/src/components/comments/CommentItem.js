import cssClasses from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={cssClasses.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
