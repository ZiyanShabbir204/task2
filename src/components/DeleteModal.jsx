import React from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from "react-awesome-modal";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DeleteModal  = (props) => {
    const navigate = useNavigate();
    const closeModal = () => {
      props.setVisible(false);
    //   console.log("props.component", props.component);
    //   {
    //     props.value.success &&
    //       (props.component == "User" ? navigate("/user") : navigate("/todo"));
    //   }
    };
    return (
      <Modal
        visible={props.visible}
        width="400"
        height="200"
        effect="fadeInUp"
        onClickAway={() => closeModal()}
      >
        <div className="modal-wrapper">
          <div className="close-icon">
            <FontAwesomeIcon
              icon={faX}
              aria-hidden="true"
              onClick={() => closeModal()}
            />
          </div>
  
          <div className="modal" style={{gap:"0px"}}>
          <div className="modal-status">
              <h1>Alert</h1>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                aria-hidden="true"
                color="red"
              />
            </div>
  
            <h3>Do you want to delete <b>{props.description}</b> ?</h3>
            <div style={{display:"flex",gap:"8px"}}>
            <button onClick={() => closeModal()} className="close-btn" style={{background:"cornflowerblue"}}>
              Close
            </button>
            <button onClick={() => props.deleteHandler()} className="close-btn">
              Delete
            </button>


            </div>

            
          </div>
        </div>
      </Modal>
    );
  };
  

export default DeleteModal