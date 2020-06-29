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

export default class Task extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task.id} index={this.props.index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={"item"}
        >
          <label className={"item-title"} for={this.props.task.content}>{this.props.task.content}</label>
          <input type="text" id={this.props.task.content} name={this.props.task.content} placeholder={`Please enter your ${this.props.task.content.toLowerCase()}`} required />
        </div>
      )}
    </Draggable>
    );
  }
}