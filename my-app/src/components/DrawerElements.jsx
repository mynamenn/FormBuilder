import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import '../data/index';
import Homepage from '../pages/Homepage';
import '../style/index.css';
import { green } from "@material-ui/core/colors";
import { white, green100 } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import { green400 } from "material-ui/styles/colors";
import { green200 } from "material-ui/styles/colors";

const DrawerElements = () => {

  const onDropDown = (e) => {
    var display = document.getElementById("dropdown-container").style.display;
    console.log(display);
    display === 'none' ? document.getElementsByClassName("dropdown-btn")[0].style.background = green200 : document.getElementsByClassName("dropdown-btn")[0].style.background = null ;
    display === 'none' ? document.getElementById("dropdown-container").style.display = 'block' : document.getElementById("dropdown-container").style.display = 'none';
};

  return (
    <div class="sidenav">
      <h2 className="formBuilderHead">Form Builder</h2>
      <button class="dropdown-btn" onClick={onDropDown} >Fields
        <i class="fa fa-caret-down">🔽</i></button>
      <div id="dropdown-container">
        <Homepage status="Sidebar" />
      </div>

      <a href="#about">Saved forms</a>
      <a href="#about">Help</a>
    </div>
  );
}

export default DrawerElements;