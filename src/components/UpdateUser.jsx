import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../api/UserApi";

const UpdateUser = ({ userId, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserById(userId);
        setUser(fetchedUser);
        setName(fetchedUser.name);
        setEmail(fetchedUser.email);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateUser = async () => {
    try {
      const updatedUser = await updateUser(userId, { name, email });
      setIsOpen(false);
      console.log("Updated user:", updatedUser);
      onUpdate(updatedUser); // Вызываем функцию onUpdate, переданную из родительского компонента
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  if (!user) {
    return null; // или отобразить загрузочный индикатор
  }

  return (
    <div>
      <button className="back" onClick={toggleModal}>
        EDIT USER
      </button>
      {isOpen && (
        <div className="modaloverlay">
          <div className="modal">
            <div className="modalcontent">
              <div className="header">
                <h2 className="text">edit user</h2>
                <button className="close" onClick={toggleModal}>
                  &times;
                </button>
              </div>
              <form className="inputcontainer">
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Username"
                />
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </form>
              <button className="btn" onClick={handleUpdateUser}>
                update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// UpdateUser.propTypes = {
//   userId: PropTypes.string.isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

export default UpdateUser;
