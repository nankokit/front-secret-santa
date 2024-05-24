import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRoomsByUserId } from "../api/RoomApi"; // Импорт функции getRoomsByUserId
import { deleteUser, getUserById, updateUser } from "../api/UserApi";
import DeleteUser from "../components/DeleteUser";
import Header from "../components/Header";
import UpdateUser from "../components/UpdateUser";

const InfoUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [rooms, setRooms] = useState([]); // Состояние для хранения комнат

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const data = await getUserById(id);
          setUser(data);

          // Загрузка комнат пользователя
          const userRooms = await getRoomsByUserId(id);
          setRooms(userRooms);
          console.log("User rooms:", userRooms);
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
          <h2>Rooms:</h2>
          <ul className="h2">
            {rooms.map((room) => (
              <li key={room.id}>
                <Link className="link" to={`/rooms/${room.id}`}>
                  {room.id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <UpdateUser userId={id} onUpdate={handleUpdateUser} />
        <DeleteUser userId={id} onDelete={handleDeleteUser} />
      </div>
    </div>
  );
};

export default InfoUser;
