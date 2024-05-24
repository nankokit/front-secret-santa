import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRooms } from "../api/RoomApi";
import { getUserById } from "../api/UserApi";
import AddRoom from "../components/AddRoom";
import Header from "../components/Header";

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [isRoomsUpdated, setIsRoomsUpdated] = useState(false);

  const fetchRooms = async () => {
    try {
      const data = await getAllRooms();
      // Fetch the user information for each room
      const roomsWithUserInfo = await Promise.all(
        data.map(async (room) => {
          const users = await Promise.all(
            room.users.map(async (userId) => {
              const user = await getUserById(userId);
              return user;
            })
          );
          const master = room.master ? await getUserById(room.master.id) : null;
          return { ...room, users, master };
        })
      );
      setRooms(roomsWithUserInfo);
      setIsRoomsUpdated(true);
    } catch (error) {
      console.error("Error in fetchRooms:", error);
      // Add additional error handling logic here, such as displaying an error message to the user
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleNewRoom = (newRoom) => {
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    setIsRoomsUpdated(true);
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="decription">
        <h1>All rooms:</h1>
        <div className="btn">
          <AddRoom onNewRoom={handleNewRoom} />{" "}
        </div>
      </div>
      <div className="container">
        {rooms.map((room) => (
          <Link
            style={{ textDecoration: "none" }}
            key={room.id}
            to={`/rooms/${room.id}`}
          >
            <div className="card" key={room.id} to={`/rooms/${room.id}`}>
              <p className="h1">Room ID: {room.id}</p>
              <p className="h2">Master: {room.master?.name || "N/A"}</p>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
