import { useRouter } from "next/router";
import styles from "./product.module.css";

export default function Product() {
  const router = useRouter();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const idValue = e.target.id.value;

    if (idValue) {
      router.push(`/product/${idValue}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={HandleSubmit}>
      <input className={styles.input} type="text" name="id"></input>
      <button className={styles.button}>Buscar</button>
    </form>
  );
}
