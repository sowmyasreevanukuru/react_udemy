import React, { Suspense } from "react";
// react-router-dom version 6
import { Link, Navigate, Route, Routes } from "react-router-dom";
// react-router-dom version 5
// import { Redirect, Route, Switch } from "react-router-dom";
const Comments = React.lazy(() => import("./components/comments/Comments"));
const Layout = React.lazy(() => import("./components/layout/Layout"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AddNewQuote = React.lazy(() => import("./pages/AddNewQuote"));
const LoadingSpinner = React.lazy(() =>
  import("./components/ui/LoadingSpinner.js")
);

function App() {
  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/quotes" replace />} />
            <Route path="/quotes" element={<AllQuotes />} />
            <Route path="/quotes/addnew" element={<AddNewQuote />} />
            <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
              <Route
                path=""
                element={
                  <div className="centered">
                    <Link className="btn--flat" to="comments">
                      Load Comments
                    </Link>
                  </div>
                }
              />
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        {/* <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/addnew" exact>
            <AddNewQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch> */}
      </Layout>
    </>
  );
}

export default App;
