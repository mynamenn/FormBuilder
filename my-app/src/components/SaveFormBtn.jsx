import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';


// Props passed : tasksOrder, img, tasks, handleSaveForm, initialLength
// handleSaveForm() post formData containing newForm and companyName to backend
export default function SaveFormBtn(props) {

    const [open, setOpen] = React.useState(false);

    const [formName, setFormName] = React.useState("");

    const [merchantId, setMerchantId] = React.useState("");

    const [employeeId, setEmployeeId] = React.useState("");

    const [formType, setFormType] = React.useState("Mandate")

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleNameChange = (e) => {
        setFormName(e.target.value);
    }

    const handleMerchantIdChange = (e) => {
        setMerchantId(e.target.value);
    }

    const handleEmployeeIdChange = (e) => {
        setEmployeeId(e.target.value);
    }

    const handleSave = () => {
        var newForm = {
            [formName]: {
                image: props.img,
                taskIds: props.tasksOrder,
                tasks: props.tasks,
                merchantId: merchantId,
                employeeId: employeeId,
                formType: formType,
                published: false,
                initialLength: props.initialLength
            }
        }
        props.handleSaveForm(newForm);
        setFormName("");
        setOpen(false);
        setFormType("Mandate");
        setEmployeeId("");
        setMerchantId("");
    }

    const checkFormType = (e) => {
        setFormType(e.target.value);
    }

    return (
        <div>
            <Button onClick={handleOpen} id="saveButton">
                <img src={saveIcon} className="invertColour"
                    width="25" height="25" />
            </Button>

            <Modal id="modal" show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Save Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label>Form Name &ensp;</label>
                    <input type="text" name="Form Name"
                        value={formName} onChange={handleNameChange} />
                    <br />
                    <br />
                    <label>merchantId &ensp;</label>
                    <input type="text" name="merchantId"
                        value={merchantId} onChange={handleMerchantIdChange} />
                    <br />
                    <br />
                    <label>employeeId &ensp;</label>
                    <input type="text" name="employeeId"
                        value={employeeId} onChange={handleEmployeeIdChange} />
                    <br />
                    <br />
                    <label>Form Type &ensp;</label>
                    <select id="typeOfForm" name="inputField" required onChange={checkFormType}>&ensp;
                        <option value="Mandate" defaultValue="selected">Mandate</option>
                        <option value="Instant">Instant Pay</option>
                    </select>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

const saveIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAABdElEQVRoge2aT07CQBSHv3YBCUvdaIBT6TEMJ8KdHkG8AcqqxgWJ8RZCdFkXpag4r52pDX0d35e8Vfsyv6/Qf9OBL4bADHgEtkCupN6BB+CCAMbAk4LwdXUNjOpkhp4yd8Ak5Cj9kQmwcORYASdVjTNHk6uOKVMyFbI8A2dS00poOqy28R1H2u+FQvgXm4omzUI58AqchzRoFyr/fqchDdqFygvFKKRBu1AOzAGSgLBJ8+xOpHEPxwk5mJexCS1jE/qITYi0WRa9mJB2TEg7IUJtvz4kQn3H+TRdh++jxaLpAA2ZAvcB+XIgD7kP9YJ/fQ71AhPSTnRCIF8Cjz0P54s0X7d/45U2aJQpkebrKu9Dbb//tI0zd3TnkAlpx4S0Y0LaMSHtmJB2TEg7JqQdE9JOSrHyKhbeUmDddYoWWafAjbBR+ySJi1solpdldP+1wRfpq0QGDMqdxril+lLZzuEHA+CKYjmk7wqtLmsDLHeZ97/MJ7CHmP8UEGCRAAAAAElFTkSuQmCC";