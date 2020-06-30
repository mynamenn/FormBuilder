import React from 'react';
import Column from './column';
import '@atlaskit/css-reset';


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

                </div>

        )
    }
}
