import QuoteList from "./../quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "./../ui/LoadingSpinner";
import NoQuotesFound from "./../quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React" },
  { id: "q2", author: "Maximillian", text: "Learn react" },
];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused"></p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes}></QuoteList>;
};

export default AllQuotes;
