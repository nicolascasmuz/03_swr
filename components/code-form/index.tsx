import React, { useState, useEffect } from "react";
import styles from "./code-form.module.css";
import { getToken } from "lib/api";

export default function CodeForm() {
  /* const stringEmail = localStorage.getItem("saved-state");
  const [code, setCode] = useState("");

  getToken(stringEmail, code);

  const HandleCodeSubmit = async (e) => {
    e.preventDefault();

    const codeValue = e.target.code.value;

    if (codeValue) {
      setCode(codeValue);
    }
  }; */

  return (
    <form className={styles["code-form"]}>
      <input className={styles["code-input"]} type="text" name="code" />
      <button className={styles["code-button"]}>Ingresar</button>
    </form>
  );
}
