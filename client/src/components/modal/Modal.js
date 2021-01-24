import React from 'react'
import ReactDom from 'react-dom'

import Backdrop from "../backdrop/Backdrop"
import Form from "../form/Form"

import {Grow} from "@material-ui/core"
import "./Modal.css"

const ModalOverlay = ({setCurrentId,currentId, setShowModal}) => {


    const content = (
        <Grow in onExit>
        <div className="modal">
            <Form currentId={currentId} setCurrentId={setCurrentId} setShowModal={setShowModal}/>
            <button onClick={()=>setShowModal(false)} className="close-modal-btn">Close</button>
        </div></Grow>
    );
    return ReactDom.createPortal(content,document.getElementById('modal-hook'))
}


const Modal = ({setShowModal, showModal,setCurrentId,currentId}) => {
    return (
        <>
        {showModal&&<Backdrop onClick={()=>setShowModal(false)}/>}
        {showModal&&<ModalOverlay setCurrentId={setCurrentId} currentId={currentId} setShowModal={setShowModal}/>}
        </>
    )
}

export default Modal
