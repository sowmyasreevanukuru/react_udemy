import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [newTitle, setTitle] = useState("");
  const [newAmt, setAmount] = useState("");
  const [newDate, setDate] = useState("");

  //   const [userInput, setInput] = useState({
  //     newTitle: "",
  //     newAmt: "",
  //     newDate: "",
  //   });

  //handlers to manage inputs
  const onTitleChange = (event) => {
    setTitle(event.target.value);
    // setInput({
    //   ...userInput,
    //   newTitle: event.target.value,
    // });
  };

  const onAmountChanged = (event) => {
    setAmount(event.target.value);

    // setInput({
    //   ...userInput,
    //   newAmt: event.target.value,
    // });
    // setInput((prevState) => {
    //     return {...prevState,newAmt: event.target.value};
    // })
  };

  const onDateChanged = (event) => {
    setDate(event.target.value);
    // setInput({
    //   ...userInput,
    //   newDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: +newAmt,
      date: new Date(newDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmt}
            min="1"
            step="0.01"
            onChange={onAmountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            value={newDate}
            onChange={onDateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
