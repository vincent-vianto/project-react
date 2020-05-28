import React from "react";
import "./sideDrawer.css";

const SideDrawer = (props) => {
    let drawerClasses ='side-drawer'
    if (props.show){
        drawerClasses='side-drawer open'
    }
  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default SideDrawer;
