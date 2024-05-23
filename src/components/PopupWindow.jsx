import React, { useState } from "react";
import Modal from "react-modal";

const PopupWindow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <h2>Заголовок модального окна</h2>
      <p>Текст модального окна</p>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal className="modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default PopupWindow;
