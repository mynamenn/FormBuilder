import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';
import '../style/index.css';

const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <div class="col-wrapper">
        <Droppable droppableId={this.props.column.id}>
          {provided =>
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
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