import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import '../data/index';
import '../style/index.css';
import { green } from "@material-ui/core/colors";
import { white, green100 } from "material-ui/styles/colors";
import { black } from "material-ui/styles/colors";
import { green400 } from "material-ui/styles/colors";
import { green200 } from "material-ui/styles/colors";
import { AddFieldBtn } from "./AddFieldBtn";
import NewDnd from "./newDnd";
import initialData from "../data/initial-data";

const DrawerElements = (props) => {

  const onDropDown = (e) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'block' ? document.getElementsByClassName("dropdown-btn")[0].style.background = null : document.getElementsByClassName("dropdown-btn")[0].style.background = green200 ;
    display === 'block' ? document.getElementById("dropdown-container").style.display = 'none' : document.getElementById("dropdown-container").style.display = 'block';
};

  return (
    <div class="sidenav">
      <h2 class="formBuilderHead">Form Builder</h2>
      <button class="dropdown-btn" onClick={onDropDown} >
        Fields🔽
      </button>
      <div id="dropdown-container">
        <NewDnd status='Sidebar' data={props.data}></NewDnd>
      </div>
      
      <a href="#about">Saved forms</a>
      <a href="#about">Help</a>
    </div>
  );
}

export default DrawerElements;