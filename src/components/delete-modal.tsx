import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DeleteModal: React.FC<{ 
    title?: string, 
    text?: string, 
    show?: boolean, 
    onHide: any, 
    parameter: string,
    callback: any
}> = ({ 
    title, 
    text = false, 
    show, 
    onHide, 
    parameter,
    callback 
}) => {
    function handleDelete() {
        callback(parameter);
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title ? title : "Modal Title"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {text}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>No</Button>
                <Button variant="danger" onClick={() => handleDelete()}>Yes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal;