import React, { useEffect } from "react";
// react-router-dom version 6
import { useNavigate } from "react-router-dom";
// react-router-dom version 5
// import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const AddNewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  // react-router-dom version 6
  const navigate = useNavigate();
  // react-router-dom version 5
  // const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      // react-router-dom version 6
      navigate("/quotes", { replace: true });
      // react-router-dom version 5
      // history.replace("/quotes");
    }
  }, [
    status,
    // react-router-dom version 6
    navigate,
    // react-router-dom version 5
    // history
  ]);

  const onAddNewQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    console.log(quoteData);
  };
  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddNewQuoteHandler}
    />
  );
};

export default AddNewQuote;
