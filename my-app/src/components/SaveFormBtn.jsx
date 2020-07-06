import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';

export default function SaveFormBtn(props) {

    const [open, setOpen] = React.useState(false);

    const [formName, setFormName] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleNameChange = (e) => {
        setFormName(e.target.value);
    }

    const handleSave = () => {
        var newForm = {
            [formName]: {
                image: props.img,
                tasks: props.tasks
            }
        }
        props.handleSaveForm(newForm);
        setFormName("");
        setOpen(false);
    }

    return (
        <div>
            <Button onClick={handleOpen}>💾</Button>

            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Save Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label>Form Name &ensp;</label>
                    <input type="text" name="Form Name"
                        value={formName} onChange={handleNameChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
