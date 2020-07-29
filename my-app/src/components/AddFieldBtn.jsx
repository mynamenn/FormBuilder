import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';
import styled from 'styled-components';


export function AddFieldBtn({ handleAddField }) {

    const [open, setOpen] = React.useState(false);  // Modal open or close
    const [field, setField] = React.useState("");   // For field name
    const [listVal, setListVal] = React.useState("");  // Drop down list value
    const [list, setList] = React.useState([]);   // List of values

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setList([]);
        setField("");
        setOpen(false);
    }

    const handleSubmit = () => {
        var inputFieldElement = document.getElementById('inputField');
        var inputFieldSelected = inputFieldElement.options[inputFieldElement.selectedIndex].value
        var typeElement = document.getElementById('type');
        var typeSelected = typeElement.options[typeElement.selectedIndex].value
        handleAddField(field, typeSelected, inputFieldSelected, list);
        handleClose();
        setField("");
        setList([]);
    }

    const handleFieldChange = (e) => {
        setField(e.target.value);
    }

    const checkInputField = () => {
        var inputFieldElement = document.getElementById('inputField');
        var inputFieldSelected = inputFieldElement.options[inputFieldElement.selectedIndex].value
        // Hide or show type list
        if (inputFieldSelected === 'TextField') {
            document.getElementById('Types').style.display = "block";
        } else {
            document.getElementById('Types').style.display = "none";
        }

        // Hide or show list val
        if (inputFieldSelected === 'DropDownList') {
            document.getElementById('ListValues').style.display = "block";
        } else {
            document.getElementById('ListValues').style.display = "none";
        }

    }

    const handleListValChange = (e) => {
        setListVal(e.target.value);
    }

    const handleAddListVal = () => {
        if (listVal.length == 0) {
            return;
        } else {
            var newList = [...list, listVal];
            setList(newList);
            setListVal("");
        }
    }

    const Container = styled.div`
    font-size: 15px;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
    position: relative;
    background-color: lightgray;
`;

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
                    <label>Field Name &ensp; &nbsp;</label>
                    <input type="text" name="Add field"
                        value={field} id="addFieldInput" onChange={handleFieldChange} />
                    <br />
                    <br />

                    <label for="inputField">Input Field &ensp; &ensp;</label>
                    <select id="inputField" name="inputField" required onChange={checkInputField}>&ensp;
                        <option value="TextField" defaultValue="selected">Text Field</option>
                        <option value="BankList">Bank List</option>
                        <option value="Checkbox">Checkbox</option>
                        <option value="DropDownList">Drop Down List</option>
                        <option value="Frequency">Frequency</option>
                        <option value="BusinessModel">Business Model</option>
                        <option value="Date">Date</option>
                        <option value="idType">ID Type</option>
                    </select>

                    <div id="Types">
                        <br />
                        <label for="type">Type &ensp; &ensp; &ensp; &ensp; &ensp;</label>
                        <select id="type" name="type" required>
                            <option value="String" selected="selected">String</option>
                            <option value="Float">Float</option>
                            <option value="Integer">Integer</option>
                            <option value="Email">Email</option>
                            <option value="Phone Number">Phone Number</option>
                            <option value="Maximum Frequency">Maximum Frequency</option>
                        </select>
                    </div>

                    <div id="ListValues" style={{ display: "none" }}>
                        <br />
                        <label for="ListValues">List Values &nbsp; &ensp;</label>
                        <input type="text" name="Add values"
                            value={listVal} onChange={handleListValChange} />
                        <Button variant="secondary" onClick={handleAddListVal}>
                            ➕
                        </Button>
                        {list.map((value) =>
                            <Container>{value}</Container>
                        )}
                    </div>

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
