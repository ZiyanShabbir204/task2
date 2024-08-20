import React, { useRef,useEffect,useState } from "react";
import { changePassword } from "../../api/adminApi";
import { useNavigate, useParams } from "react-router-dom";
import CustomModal from "../CustomModal";
import { useSelector } from "react-redux";

const ChangePassword = () => {

  const password = useRef();
  const newPassword = useRef();
  const confirmPassword = useRef();
  const params = useParams();
  const token = useSelector((state) => state.admin.token);
  const navigate = useNavigate();
  const [modalText, setModalText] = useState({
    description: "",
    success: true,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (password && newPassword && confirmPassword) {
      password.current.value = "";
      newPassword.current.value = "";
      confirmPassword.current.value = "";
    }
  }, [visible]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (confirmPassword.current.value != newPassword.current.value) {
      setModalText({description: "password and confirm password donot match",success:false});
      setVisible(true);
      // alert("password and confirm password donot match");
      return;
    }
    const payload = {
      password: password.current.value,
      newPassword: newPassword.current.value,
    };
    const response = await changePassword(token, params._id, payload);
    if (response.success) {
    

      setModalText({ description: "password change", success: true });
      setVisible(true);
      // navigate("/");
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
          type="password"
          ref={password}
          placeholder="password"
          className="login-input-field"
        />
        <input
          type="password"
          ref={newPassword}
          placeholder="new password"
          className="login-input-field"
        />
        <input
          type="password"
          ref={confirmPassword}
          placeholder="confirm password"
          className="login-input-field"
        />

        <button type="submit" className="login-btn">
          change
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
