import React, { Fragment, useState, useRef } from "react";
import '../style/index.css';
import NewDnd from "./newDnd";
import { white } from "material-ui/styles/colors";
import { Button } from '@material-ui/core';


// Passed props : data, btnSetState, handleSwitchForms, savedForms
// btnSetState update data in Menu
// handleSwitchForms update savedForms, img, data, currSavedFormIndex in Menu
export default class DrawerElements extends React.Component {

  // When form is clicked, set data and img in state
  switchForm = (e) => {
    // Form newData based on selected form in savedForms
    var index = e.target.value;
    var formName = Object.keys(this.props.savedForms[index]["newForm"]);
    var newData = {
      tasks: this.props.savedForms[index]["newForm"][formName]["tasks"],
      columns: {
        'column-1': {
          id: 'column-1',
          title: 'main',
          taskIds: this.props.savedForms[index]["newForm"][formName]["taskIds"]
        },
        'column-2': {
          id: 'column-2',
          title: 'Sidebar',
          taskIds: [],
        },
      },
      columnOrder: ['column-1', 'column-2'],
      initialLength: this.props.savedForms[index]["newForm"][formName]["initialLength"],
      saveChanges: true
    }

    this.props.handleSwitchForms(
      this.props.savedForms,
      this.props.savedForms[index]["newForm"][formName]["image"],
      newData,
      index
    );

  }

  onDropDownFields = (e) => {
    var display = document.getElementById("dropdown-container").style.display;
    display === 'block' ? document.getElementsByClassName("dropdown-fields-btn")[0].style.background = null : document.getElementsByClassName("dropdown-fields-btn")[0].style.background = white;
    display === 'block' ? document.getElementById("dropdown-container").style.display = 'none' : document.getElementById("dropdown-container").style.display = 'block';
  };

  onDropDownForms = (e) => {
    var display = document.getElementById("dropdown-forms-container").style.display;
    display === 'block' ? document.getElementById("dropdown-forms-container").style.display = 'none' : document.getElementById("dropdown-forms-container").style.display = 'block';
  }

  render() {
    return (
      <div className="sidenav" >
        <h2 className="formBuilderHead">curlec</h2>

        <button className="dropdown-fields-btn" onClick={this.onDropDownFields} >
          Fields &ensp;
        <img src={expandIcon}
            width="20" height="20" />
        </button>
        <div id="dropdown-container">
          <NewDnd status='Sidebar' data={this.props.data} btnSetState={this.props.btnSetState}></NewDnd>
        </div>

        <button className="dropdown-forms-btn" onClick={this.onDropDownForms} >
          Saved Forms
        <img src={expandIcon}
            width="20" height="20" />
        </button>
        <div id="dropdown-forms-container">
          {
            (this.props.savedForms !== []) ?
              this.props.savedForms.map((form, index) =>
                // Show publish equals false forms
                <div>
                  <button key={index} onClick={this.switchForm} value={index} className="savedFormsBtn">{Object.keys(form["newForm"])}</button>
                  <br />
                </div>
              ) : null
          }
        </div>

      </div>
    );
  }
}


const expandIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAABzElEQVRoge2YyUoDQRCGv6jvJOLFJxAvrrjvRo0b4oYgCCIIIogggogX0Wfxntz1qCfjzSweZhqTOMl0OdOZCPVBQS5V9X8TmHQaFEVRFEVRFKXF6QSegSzQm3CWSnqBHF62TtumbuADKPtVACZcpBMyBHzxk+sT6AlrqpUxVQSmHAW1YYRqGSupLiAf0FQpNecwdD3m/N31cuXxsv8i16DJVAlYchq/miV/Z1iubFDzu0Wjkco4lDBksJMpA29BA9KWzaa2nKl4syVZ0nENOnQgsy3McBA2cFM48DRGmR3h7n3bwRvCwXFIHQl37kkXrAsXnEWQORbu2v3rokXs3zRl4BxICXecCOaX8B50JBaQSV1jJ5UCLoQya1FlDPPIpG6AthCZS6FM7L99UqlbgqVSwJVQZjVuGUPYuaq2HoCOiv524E4os+JKxjCLTOoRT6oduBfKLLuWMUhfFE9+SWQWmiVjmEH2TUlk6p7NXDNNvFKJyhjikmr2f62GTBFNqoR3KmkphvEuVKQyRWCy+XHtqL2ZCatWuVFqyCB2UgVgPKGMYsKk/pWMYYBgqQIwlmCuSPRTLVUARhNNFAN9wCvw4n9WFEVRFEVJiG+EQQBfw7skMgAAAABJRU5ErkJggg==";