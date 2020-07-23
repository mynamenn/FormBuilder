import React from 'react';
import Column from './column';
import { AddFieldBtn } from './AddFieldBtn';


export default class NewDnd extends React.Component {

    // Add new element to fields when submit is pressed
    handleAddField = (fieldName, fieldType, inputField, list) => {
        this.props.data.initialLength += 1;
        const newId = 'task-' + (this.props.data.initialLength).toString();
        const newTasks = {
            ...this.props.data.tasks,
            [newId]: { id: newId, content: fieldName, stats: 'Sidebar', type: fieldType, inputField: inputField, listValues: list },
        };

        const newTaskIds = {
            id: 'column-2',
            title: 'Sidebar',
            taskIds: this.props.data.columns['column-2'].taskIds.concat(newId),
        };

        const newState = {
            ...this.props.data,
            tasks: newTasks,
            columns: {
                ...this.props.data.columns,
                'column-2': newTaskIds
            }
        };
        // Pass data to Menu
        this.props.btnSetState(newState);
    };

    // Delete element
    handleCloseField = (colName, taskId) => {
        // Remove taskId from tasks
        const newTasks = {
            ...this.props.data.tasks,
        };
        delete newTasks[taskId];

        // Remove taskId from columns
        const index = this.props.data.columns[colName].taskIds.indexOf(taskId);
        const ids = this.props.data.columns[colName].taskIds;
        ids.splice(index, 1);
        const newTaskIds = {
            id: colName,
            title: this.props.data.columns[colName].title,
            taskIds: ids,
        };

        const newState = {
            ...this.props.data,
            tasks: newTasks,
            columns: {
                ...this.props.data.columns,
                [colName]: newTaskIds
            }
        };
        this.props.btnSetState(newState);
    };

    filterKey = (columnId) => {
        const column = this.props.data.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.props.data.tasks[taskId]);

        return <Column key={columnId} column={column}
            tasks={tasks} handleCloseField={this.handleCloseField} columnId={columnId} />;

    }

    render() {
        return (
            (this.props.status === 'main') ?
                <div>
                    {this.filterKey('column-1')}
                </div>
                :
                <div>
                    {this.filterKey('column-2')}
                    <AddFieldBtn handleAddField={this.handleAddField}></AddFieldBtn>
                </div>

        )
    }
}
