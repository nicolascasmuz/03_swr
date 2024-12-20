import styles from "./login.module.css";
import { useAuth } from "../../lib/hooks";

export default function Login() {
  const data: any = useAuth();

  return (
    <form className={styles["login-form"]}>
      <input className={styles["login-input"]} type="email" name="email" />
      <button className={styles["login-button"]}>Siguiente</button>
    </form>
  );
}
