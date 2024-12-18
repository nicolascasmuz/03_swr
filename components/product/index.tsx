import styles from "./product.module.css";
import { useProduct } from "../../lib/hooks";

export default function Product() {
  const data: any = useProduct("recWFrRWzLgoTF9Pl");

  return (
    <div className={styles["card-comp"]}>
      <h3 className={styles["card-title"]}>{data?.name}</h3>
      <img
        src={data?.pic}
        alt={data?.name.toLowerCase().replaceAll(" ", "-")}
        className={styles["card-img"]}
      />
      <h4 className={styles["card-price"]}>${data?.price}</h4>
    </div>
  );
}
