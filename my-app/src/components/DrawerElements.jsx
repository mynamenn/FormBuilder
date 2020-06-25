import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import '../data/index';
import Homepage from '../pages/Homepage';
import '../style/index.css';

const DrawerElements = () => {

  const onDropDown = (event) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'none' ? document.getElementById("dropdown-container").style.display = 'block' : document.getElementById("dropdown-container").style.display = 'none';
};

  return (
    <div class="sidenav">
      <h2 className="formBuilderHead">Form Builder</h2>
      <button class="dropdown-btn" onClick={onDropDown}>Fields
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