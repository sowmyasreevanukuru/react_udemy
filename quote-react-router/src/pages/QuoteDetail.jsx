import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

// react-router-dom v5
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
// import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  // react-router-dom version 5
  // const routeMatch = useRouteMatch();

  const {
    sendRequest,
    data: loadedQuote,
    error,
    status,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status === "completed" && !loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      {/* react-router-dom v6 */}
      <Outlet />
      {/* react-router-dom v5 */}
      {/* <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>s
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments quoteId={quoteId} />
      </Route> */}
    </div>
  );
};

export default QuoteDetail;
