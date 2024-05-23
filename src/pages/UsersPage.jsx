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
      <h1>Users</h1>
      <AddUser />
      <div className="container">
        <div className="card">
          <div className="h1"></div>
        </div>
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
