import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../DeleteModal";

import { useNavigate } from "react-router-dom";
import { getAllUser, deleteAllUserApi } from "../../api/userApi";
import {
  deleteAllUser,
  getUser,
  setLoader,
} from "../../store/slices/userSlice";
import User from "./User";
import Spinner from "../Spinner";
const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const userData = useSelector((state) => state.user.users);
  const loader = useSelector((state) => state.user.loader);
  const token = useSelector((state) => state.admin.token);
  const deleteHandler = async () => {
    setVisible(false);
    try {
      const response = await deleteAllUserApi();

      if (response) {
        dispatch(deleteAllUser());
      }
    } catch (error) {}
  };
  const dataHandler = async () => {
    const user = await getAllUser(token);
    console.log(user, "user!!!!!!!!!!!");

    if (user.success) {
      dispatch(getUser(user.data));
      dispatch(setLoader(false));
    } else {
      dispatch(getUser([]));
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  console.log("users", userData);

  return (
    <div style={{ margin: "15px" }}>
      <DeleteModal
        description="Delete All"
        visible={visible}
        setVisible={setVisible}
        deleteHandler={deleteHandler}
      />
      <div className="topbar">
        <h1 style={{ textAlign: "center", color: "midnightblue" }}>Users</h1>
        <div className="topbar-content">
          <button
            className="deleteAll-btn"
            onClick={() => navigate("/user/add")}
          >
            {" "}
            Add User
          </button>
          <button
            className="deleteAll-btn"
            style={{ background: "#f12b2b" }}
            onClick={() => setVisible(true)}
          >
            {" "}
            Delete All
          </button>
        </div>
      </div>
      {userData.map((user) => (
          <User {...user} key={user._id} />
        ))}
      {/* <Suspense fallback={ <Spinner/>} >
        {userData.map((user) => (
          <User {...user} key={user._id} />
        ))}
      </Suspense> */}
      {/* {loader ? (
        <Spinner />
      ) : (
        userData.map((user) => <User {...user} key={user._id} />)
      )} */}
    </div>
  );
};
export default Users;
