import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: green;
  text-align: left;
`;

export default function Task(props) {

  const onCloseField = () => {
    props.handleCloseField(props.col, props.task.id);
  }

  const Container = styled.div`
  font-size: 15px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    position: relative;
  background-color: ${props => (props.isDragging ? 'lightGreen' : 'null')};
`;

  const Regex = {
    'String': "^[a-z ,.'-]+$",
    'Email': "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$",
    'Phone Number': "^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$",
    'Float': "^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$",
    'Integer': "^[+]?([0-9]+(?:[\][0-9]*)?|\[0-9]+)$"
  }

  const combineId = (Id) => {
    return 'alert' + Id;
  }

  const updateVal = (type, Id, e) => {
    var val = document.getElementById(Id).value;
    var reg = new RegExp(Regex[type]);
    var alertId = combineId(Id);

    if (reg.test(val)) {
      document.getElementById(alertId).innerHTML = '';
      return true;
    } else {
      document.getElementById(alertId).innerHTML = 'Invalid ' + Id + '.';
      return true;
    }
  }

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={"item"}
          isDragging={snapshot.isDragging}
        >
          <label className={"item-title"} for={props.task.content}>{props.task.content}</label>

          <button id="crossBtn" onClick={onCloseField}>
            ✖️
            </button>

          <br />

          {(props.task.stats === 'main') ?
            <div>
              <input type="text" size="20" id={props.task.content} name={props.task.content}
                placeholder={`Please enter your ${props.task.content.toLowerCase()}`}
                pattern={Regex[props.task.type]} required
                onChange={updateVal.bind(this, props.task.type, props.task.content)} />
              <br />
              <span id={combineId(props.task.content)} class="errorSpan"></span>
            </div>
            : null}

        </Container>
      )}
    </Draggable>
  );
}