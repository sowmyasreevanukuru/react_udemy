import { useRef, useState } from "react";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import cssClasses from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [isEntering, setIsEntering] = useState(false);

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const onFormFocusedHandler = () => {
    setIsEntering((prevState) => true);
  };

  function onSubmitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    if (enteredAuthor && enteredText)
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <>
      {/* react-router-dom version 5 */}
      {/* <Prompt
        when={isEntering}
        key="aaa"
        message={(location) =>
          `Are you sure? \nAll your entered data will be lost !!!`
        }
      /> */}
      <Card>
        <form
          className={cssClasses.form}
          onSubmit={onSubmitFormHandler}
          onFocus={onFormFocusedHandler}
        >
          {props.isLoading && (
            <div className={cssClasses.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={cssClasses.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={cssClasses.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={cssClasses.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
