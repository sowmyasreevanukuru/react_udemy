import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to React APP</h1>

      <Route path="/welcome/new-user">
        <p>welcome! New User :)!</p>
      </Route>
    </div>
  );
};

export default Welcome;
