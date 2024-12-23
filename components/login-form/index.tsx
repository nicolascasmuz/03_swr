import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./login-form.module.css";
import { useAuth } from "../../lib/hooks";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const userData = useAuth(email);

  useEffect(() => {
    if (userData) {
      setEmail("");
      router.push("/code");
      localStorage.setItem("saved-state", JSON.stringify(userData));
    }
  }, [userData]);

  const HandleEmailSubmit = async (e) => {
    e.preventDefault();

    const emailValue = e.target.email.value;

    if (emailValue) {
      setEmail(emailValue);
    }
  };

  return (
    <form className={styles["email-form"]} onSubmit={HandleEmailSubmit}>
      <input className={styles["login-input"]} type="email" name="email" />
      <button className={styles["login-button"]}>Siguiente</button>
    </form>
  );
}
