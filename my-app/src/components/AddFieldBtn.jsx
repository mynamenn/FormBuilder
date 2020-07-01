import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { Button } from '@material-ui/core';
import ModalHeader from 'react-bootstrap/ModalHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';


export function AddFieldBtn({ handleAddField }) {

    const [open, setOpen] = React.useState(false);
    const [field, setField] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        handleAddField(field);
        handleClose();
        setField("");
    };

    const handleFieldChange = (e) => {
        setField(e.target.value);

    };

    return (
        <div>
            <Button variant="primary" onClick={handleOpen}>
                + Add Field
            </Button>

            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Field</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label>
                        <input type="text" name="Add field"
                            value={field} onChange={handleFieldChange} />
                    </label>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
