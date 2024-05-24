import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteUser = ({ userId, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await onDelete(userId);
      navigate("/users"); // Переход на страницу users
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <div className="delete-user">
      <button className="back" onClick={handleDelete}>
        Delete User
      </button>
    </div>
  );
};

export default DeleteUser;
