import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { useAuth } from "../../lib/hooks";

export default function Login() {
  const [email, setEmail] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;
    setEmail(emailValue);
  };

  const data = useAuth(email);
  console.log("data: ", data);

  return (
    <form className={styles["login-form"]} onSubmit={HandleSubmit}>
      <input className={styles["login-input"]} type="email" name="email" />
      <button className={styles["login-button"]}>Siguiente</button>
    </form>
  );
}
