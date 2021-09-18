import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FaHome } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import React from "react";
interface MainNavigationProps {
  users : string[];
  currentAcc : string;
  getAccount(acc : string):void;
}
const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  const getUserHandler = (e: React.ChangeEvent<{value : string}>) => {
    props.getAccount(e.target.value);
  };
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/messages" activeClassName={classes.active}>
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName={classes.active}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/preferences" activeClassName={classes.active}>
              Preferences
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={classes.navRight}>
        <select
          className={classes.select}
          onChange={getUserHandler}
          defaultValue={props.currentAcc}>
          <option>Choose User</option>
          {props.users.map((user: string, index: number) => (
            <option
              key={index}
              value={user}
            >
              {user}
            </option>
          ))}
        </select>
        <Link
          className={`${classes.btn} ${classes["btn-primary"]}`}
          to="/messages">
          <FaHome />
        </Link>
        <button
          className={`${classes.btn} ${classes["btn-primary"]} ${classes.row}`}>
          <FiMail />
          New Message
        </button>
      </div>
    </header>
  );
};
export default MainNavigation;
