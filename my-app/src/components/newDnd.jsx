import React from 'react';
import Column from './column';
import { AddFieldBtn } from './AddFieldBtn';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';

// Passed props: status, data, btnSetState, savedForms, currSavedFormIndex, img
// btnSetState sets data in Menu
const postLink = 'https://uat.curlec.com/CurlecFormBuilder/DemoApp/write';
export default class NewDnd extends React.Component {
    state = {
        saveSuccess: "",
        changedSuccess: ""
    }

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
            initialLength: this.props.data.initialLength,
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

    // Post to write servlet
    handleSaveChanges = () => {
        var link = window.location.href.split('/');
        console.log("handleSaveChanges() link: ", link)
        var companyName = link[5].substr(1);
        console.log("handleSaveChanges() companyName: ", companyName)
        var formName = Object.keys(this.props.savedForms[this.props.currSavedFormIndex]['newForm']);
        this.props.savedForms[this.props.currSavedFormIndex]['newForm'][formName]['tasks'] = this.props.data.tasks;
        this.props.savedForms[this.props.currSavedFormIndex]['newForm'][formName]['taskIds'] = this.props.data['columns']['column-1']['taskIds'];
        this.props.savedForms[this.props.currSavedFormIndex]['newForm'][formName]['initialLength'] = this.props.data.initialLength;
        this.props.savedForms[this.props.currSavedFormIndex]['newForm'][formName]['image'] = this.props.img;

        var submit = [];
        this.props.savedForms.map(form => {
            submit.push(JSON.stringify(form) + '\n');
        })
        const newFormFile = new File(submit, "form.txt",
            { type: 'text/plain' });

        const formData = new FormData();
        formData.append('companyName', companyName);
        formData.append('newForm', newFormFile);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", postLink, true);
        xhr.send(formData);

        this.setState({ saveSuccess: "Saved!" });
        setTimeout(() => this.setState({ saveSuccess: "" }), 2000);
    }

    // Post to write servlet after changing published variable to false
    handleChangeMode = () => {
        var link = window.location.href.split('/');
        var companyName = link[5].substr(1);
        console.log("handleChangeMode() companyName: ", companyName);
        var formName = Object.keys(this.props.savedForms[this.props.currSavedFormIndex]['newForm']);
        this.props.savedForms[this.props.currSavedFormIndex]['newForm'][formName]['published'] = false;

        var submit = [];
        this.props.savedForms.map(form => {
            submit.push(JSON.stringify(form) + '\n');
        })
        const newFormFile = new File(submit, "form.txt",
            { type: 'text/plain' });

        const formData = new FormData();
        formData.append('companyName', companyName);
        formData.append('newForm', newFormFile);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", postLink, true);
        xhr.send(formData);

        this.setState({ changedSuccess: "Changed!" });
    }

    render() {
        return (
            (this.props.status === 'main') ?
                <div>
                    {
                        // Ensure save changes button and change mode button will only show in saved forms
                        (this.props.data.saveChanges) ?
                            <div>
                                {
                                    (this.props.savedForms[this.props.currSavedFormIndex]["newForm"][Object.keys(this.props.savedForms[this.props.currSavedFormIndex]["newForm"])]["published"]) ?
                                        <div>
                                            < button className="saveChangesBtn" onClick={this.handleChangeMode}>Change Mode</button>
                                            {this.state.changedSuccess}
                                        </div> :
                                        <div>
                                            < button className="saveChangesBtn" onClick={this.handleSaveChanges}> Save Changes</button>
                                            {this.state.saveSuccess}
                                        </div>
                                }
                            </div>
                            :
                            null
                    }

                    {this.filterKey('column-1')}
                </div >
                :
                <div>
                    {this.filterKey('column-2')}
                    <AddFieldBtn handleAddField={this.handleAddField}></AddFieldBtn>
                </div>

        )
    }
}
