const roomPath = "/rooms";

export const createRoom = async (room) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}${roomPath}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Created json  room:", data);
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

export const updateRoom = async (roomId, room) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}${roomPath}/${roomId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

export const deleteRoom = async (roomId) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_URL}${roomPath}/${roomId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

export const getAllRooms = async () =>
  fetch(`${process.env.REACT_APP_URL}${roomPath}/getAll`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

export const getRoomById = async (roomId) =>
  fetch(`${process.env.REACT_APP_URL}${roomPath}/${roomId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

export const getRoomsByUserId = async (userId) =>
  fetch(`${process.env.REACT_APP_URL}${roomPath}/user/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });