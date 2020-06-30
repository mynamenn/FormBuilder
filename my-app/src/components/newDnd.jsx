import React from 'react';
import Column from './column';
import { AddFieldBtn } from './AddFieldBtn';


export default class NewDnd extends React.Component {

    // Add new element to fields when submit is pressed
    handleAddField = (name) => {
        const newId = 'task-' + (Object.keys(this.props.data.tasks).length + 1).toString();

        const newTasks = {
            ...this.props.data.tasks,
            [newId]: { id: newId, content: name, stats: 'Sidebar' },
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

        {this.props.btnSetState(newState)};
    };

    filterKey = (columnId, status) => {
        const column = this.props.data.columns[columnId];
        const tasks = column.taskIds.map(taskId => this.props.data.tasks[taskId]);

        return <Column key={columnId} column={column} tasks={tasks} />;

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
                    <AddFieldBtn handleAddField={this.handleAddField}></AddFieldBtn>
                </div>

        )
    }
}
