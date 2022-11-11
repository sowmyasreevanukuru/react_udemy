import CommentItem from "./CommentItem";
import cssClasses from "./CommentsList.module.css";

const CommentsList = (props) => {
  return (
    <ul className={cssClasses.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
