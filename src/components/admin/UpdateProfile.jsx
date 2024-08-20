import React, { useRef, useState, useEffect } from "react";
import CustomModal from "../CustomModal";
import { updateProfile } from "../../api/adminApi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
  const fullname = useRef();
  const email = useRef();
  const params = useParams();
  const token = useSelector((state) => state.admin.token);
  const navigate = useNavigate();
  const [modalText, setModalText] = useState({
    description: "",
    success: true,
  });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (email && fullname) {
      fullname.current.value = "";
      email.current.value = "";
    }
  }, [visible]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const payload = {
      fullname: fullname.current.value,
      email: email.current.value,
    };
    const response = await updateProfile(token, params._id, payload);
    if (response.success) {
      setModalText({ description: "password change", success: true });
      setVisible(true);
      return;
    } else {
      setModalText({description: response.response.data.message,success:false});
      setVisible(true);
      
    }
  };
  return (
    <div className="form-div">
        <CustomModal
        value={modalText}
        visible={visible}
        setVisible={setVisible}
        component="Todo"
      />
      <form onSubmit={submitHandler} className="login-form">
        <input
          type="text"
          ref={fullname}
          placeholder="Fullname"
          className="login-input-field"
        />
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="login-input-field"
        />
        <button type="submit" className="login-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
