import React from 'react';
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
    console.log(props.task.id);
    props.handleCloseField(props.col, props.task.id);
  }

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={"item"}
        >
          <label className={"item-title"} for={props.task.content}>{props.task.content}</label>

          <button id="crossBtn" onClick={onCloseField}>
            ✖️
            </button>

          <br />

          {(props.task.stats === 'main') ?
            <div>
              <input type="text" size="20" id={props.task.content} name={props.task.content}
                placeholder={`Please enter your ${props.task.content.toLowerCase()}`} required />
            </div>
            : null}
        </div>
      )}
    </Draggable>
  );
}