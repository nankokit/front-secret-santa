import React, { useState } from 'react';
import { searchUser } from '../api/UserApi';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userId = await searchUser(username, password);
      console.log("Login successful. User ID:", userId);
      // Дополнительная логика после успешного входа
    } catch (error) {
      console.error("Login failed:", error);
      // Дополнительная логика в случае ошибки входа
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
