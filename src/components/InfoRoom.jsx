import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteRoom, getRoomById, updateRoom } from "../api/RoomApi";
import { getUserById } from "../api/UserApi";
import DeleteRoom from "../components/DeleteRoom";
import Header from "../components/Header";

const InfoRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      if (id) {
        try {
          const data = await getRoomById(id);
          const master = data.master ? await getUserById(data.master.id) : null;
          const users = await Promise.all(
            data.users.map(async (userItem) => {
              return await getUserById(userItem.id);
            })
          );
          setRoom({ ...data, master, users });
        } catch (error) {
          console.error("Failed to fetch room:", error);
        }
      }
    };

    fetchRoom();
  }, [id, isUpdated]);

  const handleUpdateRoom = async (updatedRoom) => {
    try {
      await updateRoom(id, updatedRoom);
      setIsUpdated(true);
      setRoom(updatedRoom);
    } catch (error) {
      console.error("Failed to update room:", error);
    }
  };

  const handleDeleteRoom = async () => {
    try {
      await deleteRoom(id);
      navigate(-1); // Переход на предыдущую страницу
    } catch (error) {
      console.error("Failed to delete room:", error);
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="decription">
        <h1>Room page</h1>
        <Link to={-1}>
          <button className="back">Back</button>
        </Link>
      </div>
      <div className="infoUser">
        <div>
          {room && (
            <div className="card">
              <h1>Room ID: {room.id}</h1>
              <h2>Master: {room.master?.name || "N/A"}</h2>
              {/* <h2>
                Users:{" "}
                {room.users.map((user) => user?.name || "N/A").join(", ")}
              </h2> */}
            </div>
          )}
        </div>
        {/* <UpdateRoom room={room} onUpdate={handleUpdateRoom} /> */}
        <DeleteRoom roomId={id} onDelete={handleDeleteRoom} />
      </div>
    </div>
  );
};

export default InfoRoom;
