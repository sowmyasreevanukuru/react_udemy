import { Fragment } from "react";
// react-router-dom version 6
import { useNavigate, useLocation } from "react-router-dom";
// react-router-dom version 5
// import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import cssClasses from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  // react-router-dom version 6
  const navigate = useNavigate();
  // react-router-dom version 5
  // const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = (order) => {
    // react-router-dom version 6
    navigate(`?sort=${isSortingAscending ? "desc" : "asc"}`);
    // react-router-dom version 5
    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    // });
  };
  return (
    <Fragment>
      <div className={cssClasses.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {!isSortingAscending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={cssClasses.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
