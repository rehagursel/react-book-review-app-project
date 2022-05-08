import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BookReviews</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/reviewList" activeClassName={classes.active}>
              All Reviews
            </NavLink>
            </li>
            <li>
            <NavLink to="/new-review" activeClassName={classes.active}>
              Add New Review
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
