import PropTypes from "prop-types";
import React, { useState } from "react";
import { createUser } from "../api/UserApi";

const AddUser = ({ isOpen, setIsOpen }) => {
  AddUser.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = async () => {
    const user = { name, email };
    const createdUser = await createUser(user);
    console.log("Created user:", createdUser);
  };

  return (
    <div className="wrapper">
      {isOpen && (
        <div className="modaloverlay">
          <div className="modal">
            <div className="modalcontent">
              <div className="header">
                <h2 className="text">new user</h2>
                <button className="close" onClick={toggleModal}>
                  &times;
                </button>
              </div>
              <form className="inputcontainer">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Username"
                />
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
                <button className="btn" onClick={handleCreateUser}>
                  create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
