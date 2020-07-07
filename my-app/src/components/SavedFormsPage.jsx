import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Typography } from '@material-ui/core';

export default function SavedFormsPage({ forms, tasks }) {

    const savedForms = forms;

    const [open, setOpen] = React.useState([]);

    const handleOpen = (index) => {
        if (open.length === index) {
            open.push(true)
        } else {
            open[index] = true;
            setOpen(open);
        }
    }

    const handleClose = (index) => {
        var states = open;
        states[index] = false;
        setOpen(states);
    }

    return (
        (savedForms.length == 0) ?
            <h1>No saved forms</h1>
            :
            <div>
                <h1>Saved Forms</h1>
                <div>
                    {

                        Object.keys(savedForms).map((key, index) =>

                            <div className="savedFormItem" key={index}>
                                <Button onClick={() => handleOpen(index)}>🔍</Button>
                                <Typography variant="h6" color="inherit" noWrap>
                                    {Object.keys(savedForms[index])}
                                </Typography>

                                {(savedForms[index][Object.keys(savedForms[index])].image === false) ?
                                    null :
                                    <img src={savedForms[index][Object.keys(savedForms[index])].image.preview}
                                        style={{ width: "300px", height: "75px", background: "transparent" }} alt="preview" />}


                                <Modal show={open[index]} onHide={() => handleClose(index)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            <Typography variant="h6" color="inherit" noWrap>
                                                {Object.keys(savedForms[index])}
                                            </Typography>
                                        </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        {savedForms[index][Object.keys(savedForms[index])].taskIds.map((taskId, index) => (
                                            <div key={index}>
                                                <label className={"item-title"} for={tasks[taskId].content}>
                                                    {tasks[taskId].content}
                                                </label>
                                                <br />
                                                <input type="text" size="20"
                                                    placeholder={`Please enter your 
                                                    ${tasks[taskId].content.toLowerCase()}`} />
                                                <br />
                                                <br />
                                            </div>
                                        ))}
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => handleClose(index)}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )
                    }
                </div>
            </div >
    )
}
