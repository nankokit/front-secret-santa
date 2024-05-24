import React, { useEffect, useState } from "react";
import { createRoom } from "../api/RoomApi";
import { getAllUser } from "../api/UserApi";

const AddRoom = ({ onNewRoom }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [master, setMaster] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUser();
      setAllUsers(users);
    };
    fetchUsers();
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateRoom = async () => {
    const room = {
      master: {
        id: master?.id,
        name: master?.name,
      },
      users: selectedUsers.map((user) => ({ id: user.id, name: user.name })),
    };

    const createdRoom = await createRoom(room);
    setIsOpen(false);
    setMaster(null);
    setSelectedUsers([]);
    onNewRoom(createdRoom);
    console.log("Created room:", createdRoom);
  };

  const handleMasterChange = (e) => {
    const selectedUser = allUsers.find(
      (user) => user.id === parseInt(e.target.value)
    );
    setMaster(selectedUser);
  };

  const handleUsersChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedUsers = selectedOptions.map((option) => ({
      id: parseInt(option.value),
      name: option.text,
    }));
    setSelectedUsers(selectedUsers);
  };

  return (
    <div>
      <button className="addButton" onClick={toggleModal}>
        ADD NEW ROOM
      </button>
      {isOpen && (
        <div className="modaloverlay">
          <div className="modal">
            <div className="modalcontent">
              <div className="header">
                <h2 className="text">new room</h2>
                <button className="close" onClick={toggleModal}>
                  &times;
                </button>
              </div>
              <form className="inputcontainer">
                <label htmlFor="master" className="text">
                  Master:
                </label>
                <select
                  id="master"
                  value={master?.id || ""}
                  onChange={handleMasterChange}
                >
                  <option value="">Select master</option>
                  {allUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="users" className="text">
                  Users:
                </label>
                <select
                  id="users"
                  multiple
                  value={selectedUsers.map((user) => user.id)}
                  onChange={handleUsersChange}
                >
                  {allUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </form>
              <button className="btn" onClick={handleCreateRoom}>
                create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRoom;
