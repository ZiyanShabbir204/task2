import React from "react";
import "../App.css";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-awesome-modal";
import { useNavigate } from "react-router-dom";

const CustomModal = (props) => {

  const routeDict = {User: "/user", Todo : "/todo" , Admin: "/" }
  const navigate = useNavigate();
  const closeModal = () => {
    props.setVisible(false);
    console.log("props.component", props.component);
    props.value.success && navigate(routeDict[props.component])
    
    
  };
  return (
    <Modal
      visible={props.visible}
      width="400"
      height="300"
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

        <div className="modal">
          {props.value.success ? (
            <div className="modal-status">
              <h1>Success</h1>
              <FontAwesomeIcon
                icon={faCheckCircle}
                aria-hidden="true"
                color="green"
              />
            </div>
          ) : (
            <div className="modal-status">
              <h1>Failure</h1>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                aria-hidden="true"
                color="red"
              />
            </div>
          )}

          <h2>{props.value.description}</h2>
          <button onClick={() => closeModal()} className="close-btn">
            Ok
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
