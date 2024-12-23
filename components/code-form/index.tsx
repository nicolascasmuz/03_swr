import React, { useState, useEffect } from "react";
import styles from "./code-form.module.css";
import { useCode } from "../../lib/hooks";

export default function CodeForm() {
  const [code, setCode] = useState("");

  const token = useCode(code);

  useEffect(() => {
    if (token) {
      console.log("token: ", token);
    }
  }, [token]);

  const HandleCodeSubmit = async (e) => {
    e.preventDefault();

    const codeValue = e.target.code.value;

    if (codeValue) {
      setCode(codeValue);
    }
  };

  return (
    <div>
      <form className={styles["code-form"]} onSubmit={HandleCodeSubmit}>
        <input className={styles["code-input"]} type="text" name="code" />
        <button className={styles["code-button"]}>Ingresar</button>
      </form>
    </div>
  );
}
