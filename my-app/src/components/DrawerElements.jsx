import React, { Fragment, useState, useRef } from "react";
import '../data/index';
import '../style/index.css';
import { green200 } from "material-ui/styles/colors";
import NewDnd from "./newDnd";

const DrawerElements = (props) => {

  const onDropDown = (e) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'block' ? document.getElementsByClassName("dropdown-btn")[0].style.background = null : document.getElementsByClassName("dropdown-btn")[0].style.background = green200;
    display === 'block' ? document.getElementById("dropdown-container").style.display = 'none' : document.getElementById("dropdown-container").style.display = 'block';
    console.log(props.btnSetState);
  };

  return (
    <div class="sidenav">
      <h2 class="formBuilderHead">Form Builder</h2>
      <button class="dropdown-btn" onClick={onDropDown} >
        Fields🔽
      </button>
      <div id="dropdown-container">
        <NewDnd status='Sidebar' data={props.data} btnSetState={props.btnSetState}></NewDnd>
      </div>

      <a href="#about">Saved forms</a>
      <a href="#about">Help</a>
    </div>
  );
}

export default DrawerElements;