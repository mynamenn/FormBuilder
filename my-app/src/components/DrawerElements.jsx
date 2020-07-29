import React, { Fragment, useState, useRef } from "react";
import '../style/index.css';
import { green200 } from "material-ui/styles/colors";
import NewDnd from "./newDnd";
import { white } from "material-ui/styles/colors";

const DrawerElements = (props) => {

  const onDropDown = (e) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'block' ? document.getElementsByClassName("dropdown-btn")[0].style.background = null : document.getElementsByClassName("dropdown-btn")[0].style.background = white;
    display === 'block' ? document.getElementById("dropdown-container").style.display = 'none' : document.getElementById("dropdown-container").style.display = 'block';
  };

  return (
    <div className="sidenav">
      <h2 className="formBuilderHead">curlec</h2>

      <button className="dropdown-btn" onClick={onDropDown} >
        Fields &ensp;
        <img src={expandIcon}
          width="20" height="20" />
      </button>
      <div id="dropdown-container">
        <NewDnd status='Sidebar' data={props.data} btnSetState={props.btnSetState}></NewDnd>
      </div>

    </div>
  );
}

export default DrawerElements;

const expandIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAABzElEQVRoge2YyUoDQRCGv6jvJOLFJxAvrrjvRo0b4oYgCCIIIogggogX0Wfxntz1qCfjzSweZhqTOMl0OdOZCPVBQS5V9X8TmHQaFEVRFEVRFKXF6QSegSzQm3CWSnqBHF62TtumbuADKPtVACZcpBMyBHzxk+sT6AlrqpUxVQSmHAW1YYRqGSupLiAf0FQpNecwdD3m/N31cuXxsv8i16DJVAlYchq/miV/Z1iubFDzu0Wjkco4lDBksJMpA29BA9KWzaa2nKl4syVZ0nENOnQgsy3McBA2cFM48DRGmR3h7n3bwRvCwXFIHQl37kkXrAsXnEWQORbu2v3rokXs3zRl4BxICXecCOaX8B50JBaQSV1jJ5UCLoQya1FlDPPIpG6AthCZS6FM7L99UqlbgqVSwJVQZjVuGUPYuaq2HoCOiv524E4os+JKxjCLTOoRT6oduBfKLLuWMUhfFE9+SWQWmiVjmEH2TUlk6p7NXDNNvFKJyhjikmr2f62GTBFNqoR3KmkphvEuVKQyRWCy+XHtqL2ZCatWuVFqyCB2UgVgPKGMYsKk/pWMYYBgqQIwlmCuSPRTLVUARhNNFAN9wCvw4n9WFEVRFEVJiG+EQQBfw7skMgAAAABJRU5ErkJggg==";