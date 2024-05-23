import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../api/UserApi";
import Header from "../components/Header";
import UpdateUser from "../components/UpdateUser"; // Импортируем новый компонент

const InfoUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

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
  }, [id]);

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
        <UpdateUser userId={id} /> {/* Встраиваем новый компонент */}
      </div>
    </div>
  );
};

export default InfoUser;
