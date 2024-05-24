import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const handleNewUser = (newUser) => {
    setUsers([...users, newUser]); // Обновляем состояние users с новым пользователем
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="decription">
        <h1>All users:</h1>
        <div className="btn">
          <AddUser onNewUser={handleNewUser} />{" "}
          {/* Передаем обновленный массив users */}
        </div>
      </div>
      <div className="container">
        {users.map((user) => (
          <Link
            style={{ textDecoration: "none" }}
            key={user.id}
            to={`/users/${user.id}`}
          >
            <div className="card" key={user.id} to={`/users/${user.id}`}>
              <p className="h1">{user?.name}</p>
              <p className="h2"> {user?.email}</p>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
