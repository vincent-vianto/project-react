import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";
import SideDrawer from "../component/SideDrawer/SideDrawer";
import BackDrop from "../component/BackDrop/BackDrop";
import Header from "../component/Header/Header";

function Index() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  };

  const backHandler  = () => {
    setSideDrawerOpen(!sideDrawerOpen)
  }
  
  let backDrop

  if (sideDrawerOpen){
    backDrop = <BackDrop click={backHandler}/>
  }
  
  return (
    <div style={{ height: "100%" }}>
      <Navbar drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer show={sideDrawerOpen}/>
      {backDrop}
      <main style={{paddingTop:"55px"}}>
        <Header/>
      </main>
    </div>
  );
}

export default Index;