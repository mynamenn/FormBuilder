import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import '../style/index.css';

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'white')};
`;

export default class Column extends React.Component {
  render() {
    return (
      <div class="col-wrapper">
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) =>
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {
                console.log(this.props.tasks)}
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index}
                  col={this.props.columnId} handleCloseField={this.props.handleCloseField} />
              ))}
              {provided.placeholder}
            </TaskList>

          }
        </Droppable>
      </div>
    );
  }
}