import React, { Fragment, useState, useRef } from "react";
import '../style/index.css';
import { green200 } from "material-ui/styles/colors";
import NewDnd from "./newDnd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const DrawerElements = (props) => {

  const onDropDown = (e) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'block' ? document.getElementsByClassName("dropdown-btn")[0].style.background = null : document.getElementsByClassName("dropdown-btn")[0].style.background = green200;
    display === 'block' ? document.getElementById("dropdown-container").style.display = 'none' : document.getElementById("dropdown-container").style.display = 'block';
  };

  return (
    <div class="sidenav">
      <h2 class="formBuilderHead">Form Builder</h2>

      <Link to='/'>Home</Link>
      <Link to="/savedForms">Saved Forms</Link>

      <button class="dropdown-btn" onClick={onDropDown} >
        Fields🔽
      </button>
      <div id="dropdown-container">
        <NewDnd status='Sidebar' data={props.data} btnSetState={props.btnSetState}></NewDnd>
      </div>

      <Link to="/help">Help</Link>

    </div>
  );
}

export default DrawerElements;