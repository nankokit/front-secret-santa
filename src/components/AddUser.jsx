import React, { useState } from "react";
import { createUser } from "../api/UserApi";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div>
      <button onClick={toggleModal}>ADD NEW USER</button>
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
                {/* <input
                  id="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                /> */}
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
