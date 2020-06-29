import React from 'react';
import ReactDOM from 'react-dom';
import Column from './column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../data/initial-data';
import { AddFieldBtn } from './AddFieldBtn';

export default class NewDnd extends React.Component {

    // Add new element to fields when submit is pressed
    // handleAddField = (name) => {
    //     const newColumn = {
    //         ...column,
    //         taskIds: newTaskIds,
    //     };

    //     this.setState(state => ({
    //         fields: [...state.fields,
    //         { fieldName: `${name}`, type: "atTheSide", backgroundColor: "red" }]
    //     }));
    // };
    filterKey = (columnId, status) => {
        const column = this.props.data.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.props.data.tasks[taskId]);
        const ltasks = tasks.filter(function (obj) {
            return obj.stats == status;
        })

        return <Column key={columnId} column={column} tasks={ltasks} />;

    }

    render() {
        return (
            (this.props.status === 'main') ?
                <div>
                    {this.filterKey('column-1', 'main')}

                </div>
                :
                <div>

                    {this.filterKey('column-2', 'Sidebar')}

                </div>

        )
    }
}
