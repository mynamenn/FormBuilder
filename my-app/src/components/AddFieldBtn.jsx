import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
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
            <Button id="AddFieldBtn" type="button" onClick={handleOpen}>
                + Add Field
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                class="modal"
            >

                <form>
                    <h2>Add Field</h2>
                    <label>
                        <input type="text" name="Add field"
                            value={field} onChange={handleFieldChange} />
                    </label>
                    <input type="button" value="Submit" onClick={handleSubmit} />
                </form>


            </Modal>
        </div>
    );
}
