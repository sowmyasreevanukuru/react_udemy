import React from "react";
import { NavLink } from "react-router-dom";
import cssClasses from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={cssClasses.header}>
      <div className={cssClasses.logo}>Nice Quotes</div>
      <nav className={cssClasses.nav}>
        <ul>
          {/* <li>
             <NavLink activeClassName={cssClasses.active} to="/">
               Home
           </NavLink>
         </li>*/}
          <li>
            {/* react-router-dom v6*/}
            <NavLink
              className={(navData) =>
                navData.isActive ? cssClasses.active : ""
              }
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? cssClasses.active : ""
              }
              to="/quotes/addnew"
            >
              Add Quote
            </NavLink>
            {/* react-router-dom v5 */}
            {/*
             <NavLink activeClassName={cssClasses.active} to="/quotes/addnew">
              Add a Quotes
            </NavLink> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
