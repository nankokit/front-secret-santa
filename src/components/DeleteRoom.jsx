import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteRoom = ({ roomId, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await onDelete(roomId);
      navigate("/rooms"); // Переход на страницу rooms
    } catch (error) {
      console.error("Failed to delete room:", error);
    }
  };

  return (
    <div className="delete-room">
      <button className="back" onClick={handleDelete}>
        Delete Room
      </button>
    </div>
  );
};

export default DeleteRoom;
