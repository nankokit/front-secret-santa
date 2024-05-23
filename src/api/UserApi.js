import { url } from "../constants/url.js";

const path = "users";

export const createUser = async (user) => {
  try {
    const response = await fetch(`${url}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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

export const updateUser = async (id, user) => {
  try {
    const response = await fetch(`${url}${path}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${url}${path}/${id}`, {
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

export const getAllUser = async () =>
  fetch(`${url}${path}/getAll`)
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

export const getUser = async (id) =>
  fetch(`${url}${path}/${id}`)
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

    export const searchUser = async (name, password) => {
      try {
        const response = await fetch(`${url}${path}/search?name=${name}&password=${password}`);
    
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
    
        const data = await response.json();
        return parseInt(data.id, 10); // Parse the id as a long
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
      }
    };