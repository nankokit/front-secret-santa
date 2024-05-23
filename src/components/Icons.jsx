import React, { useState } from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

const ContainerWithIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };

  const handleEdit = () => {
    // Реализуйте логику редактирования
  };

  const handleDelete = () => {
    // Реализуйте логику удаления
  };

  return (
    <button
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ваш контейнер */}
      <div>Содержимое контейнера</div>

      {showIcons && (
        <div className="icons-container">
          <button className="icon" onClick={handleEdit}>
            <MdModeEdit />
          </button>
          <button className="icon" onClick={handleDelete}>
            <MdDeleteForever />
          </button>
        </div>
      )}
    </button>
  );
};

export default ContainerWithIcons;
