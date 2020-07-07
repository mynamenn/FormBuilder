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
        var inputFieldElement = document.getElementById('inputField');
        var inputFieldSelected = inputFieldElement.options[inputFieldElement.selectedIndex].value
        var typeElement = document.getElementById('type');
        var typeSelected = typeElement.options[typeElement.selectedIndex].value
        handleAddField(field, typeSelected, inputFieldSelected);
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
                    <label>Field Name &ensp;</label>
                    <input type="text" name="Add field"
                        value={field} onChange={handleFieldChange} />
                    <br />
                    <br />

                    <label for="inputField">Input Field &ensp; &ensp;</label>
                    <select id="inputField" name="inputField" required>
                        <option value="TextField" selected="selected">Text Field</option>
                        <option value="BankList">Bank List</option>
                    </select>
                    <br />
                    <br />

                    <label for="type">Type &ensp; &ensp; &ensp; &ensp; &ensp;</label>
                    <select id="type" name="type" required>
                        <option value="String" selected="selected">String</option>
                        <option value="Float">Float</option>
                        <option value="Integer">Integer</option>
                        <option value="Email">Email</option>
                        <option value="Phone Number">Phone Number</option>
                    </select>

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
