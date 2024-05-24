import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUserById, updateUser } from "../api/UserApi";
import DeleteUser from "../components/DeleteUser"; // Импортируем новый компонент
import Header from "../components/Header";
import UpdateUser from "../components/UpdateUser";

const InfoUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const data = await getUserById(id);
          setUser(data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUser();
  }, [id, isUpdated]);

  const handleUpdateUser = async (updatedUser) => {
    try {
      await updateUser(id, updatedUser);
      setIsUpdated(true);
      setUser(updatedUser);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(id);
      navigate(-1); // Переход на предыдущую страницу
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="decription">
        <h1>User page</h1>
        <Link to={-1}>
          <button className="back">Back</button>
        </Link>
      </div>
      <div className="infoUser">
        <div className="card">
          <h1>{user?.name}</h1>
          <h2>{user?.email}</h2>
        </div>
        <UpdateUser userId={id} onUpdate={handleUpdateUser} />
        <DeleteUser userId={id} onDelete={handleDeleteUser} />
      </div>
    </div>
  );
};

export default InfoUser;
