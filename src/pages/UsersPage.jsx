import { React, useEffect, useState } from "react";
import { getAllUser } from "../api/UserApi";
import AddUser from "../components/AddUser";
import Header from "../components/Header";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const getAllUserRequest = async () => {
    const data = await getAllUser();
    setUsers(data);
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
          <div className="card" key={user.id} to={`/users/${user.id}`}>
            <p className="h1">{user?.name}</p>
            <p className="h2"> {user?.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
