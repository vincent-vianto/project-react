import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle";
import "./navbar.css";

const Navbar = (props) => (
  <header className="menubar">
    <nav className="menubar_nav">
      <div className="menubar_logo">
        <i>Vincent Octarian Vianto</i>
      </div>
      <div className="spacer" />
      <div className="menubar_nav_item">
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skill</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="menubar-toggle">
        <DrawerToggle click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default Navbar;
