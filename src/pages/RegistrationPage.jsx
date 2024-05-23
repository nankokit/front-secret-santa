import { useState } from "react";
import { createUser } from "../api/UserApi";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!emailIsValid(email)) {
        setError("Неправильный формат почты");
        return;
      }
    const user = { name, email, password };
    const createdUser = await createUser(user);
    console.log("Created user:", createdUser);
    console.log("Выполняется регистрация пользователя...");
  };

  const emailIsValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    // <div className={styles.container}>
    //   <h2 className={styles.title}>Регистрация</h2>
    //   {error && <p className={styles.error}>{error}</p>}
    //   <form>
    //     <div className={styles.formGroup}>
    //       <label className={styles.label} htmlFor="name">
    //         Имя:
    //       </label>
    //       <input
    //         className={styles.input}
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //     </div>
    //     <div className={styles.formGroup}>
    //       <label className={styles.label} htmlFor="email">
    //         Почта:
    //       </label>
    //       <input
    //         className={styles.input}
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className={styles.formGroup}>
    //       <label className={styles.label} htmlFor="password">
    //         Пароль:
    //       </label>
    //       <input
    //         className={styles.input}
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button
    //       className={styles.button}
    //       type="submit"
    //       onClick={handleRegister}
    //     >
    //       Зарегистрироваться
    //     </button>
    //   </form>
    // </div>
    <></>
  );
};

export default LoginPage;
