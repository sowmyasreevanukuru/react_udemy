import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import cssClasses from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main className={cssClasses.main}>{props.children}</main>
    </>
  );
};

export default Layout;
