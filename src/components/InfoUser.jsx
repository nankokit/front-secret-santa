import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser, updateUser } from "../api/UserApi"; // Импортируем функцию updateUser
import Header from "../components/Header";
import UpdateUser from "../components/UpdateUser";

const InfoUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false); // Новое состояние для отслеживания обновления

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const data = await getUser(id);
          setUser(data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };

    fetchUser();
  }, [id, isUpdated]); // Добавляем isUpdated в зависимости

  const handleUpdateUser = async (updatedUser) => {
    try {
      await updateUser(id, updatedUser);
      setIsUpdated(true); // Устанавливаем isUpdated в true после успешного обновления
      setUser(updatedUser); // Обновляем состояние user с обновленными данными
    } catch (error) {
      console.error("Failed to update user:", error);
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
        <UpdateUser userId={id} onUpdate={handleUpdateUser} />{" "}
        {/* Передаем функцию обновления */}
      </div>
    </div>
  );
};

export default InfoUser;
