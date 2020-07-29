import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import InputFieldHandler from './InputFieldHandler'

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
    text-align: left;
    position: relative;
  background-color: ${props => (props.isDragging ? 'lightGreen' : 'null')};
`;

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
          {(props.task.inputField === 'Checkbox' && props.task.stats === 'Sidebar') ?
            <label className={"item-title"} htmlFor='Checkbox'>Checkbox</label> :
            null
          }

          {(props.task.inputField != 'Checkbox' && props.task.stats === 'Sidebar') ?
            <label className={"item-title"} htmlFor={props.task.content}>{props.task.content}</label> :
            null
          }

          <button id="crossBtn" onClick={onCloseField}>
            ✖️
          </button>

          <br />

          {(props.task.stats === 'main') ?
            <InputFieldHandler content={props.task.content} type={props.task.type} inputField={props.task.inputField}
              listValues={props.task.listValues}
              className=""></InputFieldHandler>
            : null}

        </Container>
      )}
    </Draggable>
  );
}