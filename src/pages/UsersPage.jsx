import { React, useEffect, useState } from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { getAllUser } from "../api/UserApi";
import AddUser from "../components/AddUser";
import Header from "../components/Header";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const getAllUserRequest = async () => {
    const data = await getAllUser();
    setUsers(data);
  };

  const [showIcons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };

  const handleEdit = () => {
    // Реализуйте логику редактирования
  };

  const handleDelete = () => {
    // Реализуйте логику удаления
  };

  useEffect(() => {
    getAllUserRequest();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="decription">
        <h1>All users:</h1>
        <div className="btn">
          <AddUser />
        </div>
      </div>
      <div className="container">
        {users.map((user) => (
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="card"
            key={user.id}
            to={`/users/${user.id}`}
          >
            <p className="h1">{user?.name}</p>
            <p className="h2"> {user?.email}</p>
            {showIcons && (
              <div className="icons-container">
                <button className="icon" onClick={handleEdit}>
                  <MdModeEdit />
                </button>
                <button className="icon" onClick={handleDelete}>
                  <MdDeleteForever />
                </button>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
