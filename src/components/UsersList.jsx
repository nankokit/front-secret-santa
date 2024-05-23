import { React, useEffect, useState } from "react";
import { getAllUser } from "../api/UserApi";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const getAllUserRequest = async () => {
    const data = await getAllUser();
    setUsers(data);
  };

  useEffect(() => {
    getAllUserRequest();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} to={`/users/${user.id}`}>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
