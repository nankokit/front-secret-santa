import React, { useEffect, useState } from "react";
import { getRoomById, updateRoom } from "../api/RoomApi";
import { getAllUser } from "../api/UserApi";

const UpdateRoom = ({ roomId, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [master, setMaster] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUser();
      setAllUsers(users);
    };
    fetchUsers();

    const fetchRoom = async () => {
      const fetchedRoom = await getRoomById(roomId);
      setRoom(fetchedRoom);
      setMaster(fetchedRoom.master);
      setSelectedUsers(fetchedRoom.users);
    };
    fetchRoom();
  }, [roomId]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateRoom = async () => {
    const updatedRoom = {
      master: {
        id: master?.id,
        name: master?.name,
      },
      users: selectedUsers.map((user) => ({ id: user.id, name: user.name })),
    };

    try {
      const updatedRoomData = await updateRoom(roomId, updatedRoom);
      setIsOpen(false);
      onUpdate(updatedRoomData);
      console.log("Updated room:", updatedRoomData);
    } catch (error) {
      console.error("Failed to update room:", error);
    }
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

  if (!room) {
    return null; // или отобразить загрузочный индикатор
  }

  return (
    <div>
      <button className="back" onClick={toggleModal}>
        EDIT ROOM
      </button>
      {isOpen && (
        <div className="modaloverlay">
          <div className="modal">
            <div className="modalcontent">
              <div className="header">
                <h2 className="text">edit room</h2>
                <button className="close" onClick={toggleModal}>
                  &times;
                </button>
              </div>
              <form className="inputcontainer">
                <label htmlFor="master">Master:</label>
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

                <label htmlFor="users">Users:</label>
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
              <button className="btn" onClick={handleUpdateRoom}>
                update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateRoom;
