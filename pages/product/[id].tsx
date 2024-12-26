import styles from "./product.module.css";
import { useProduct } from "../../lib/hooks";
import { useRouter } from "next/router";
import MainLayout from "components/main-layout";

export default function Product() {
  const router = useRouter();
  const query: any = router.query;

  const data: any = useProduct(query.id);

  return (
    <MainLayout>
      <div className={styles["card-comp"]}>
        <h3 className={styles["card-title"]}>{data?.name}</h3>
        <img
          src={data?.pic}
          alt={data?.name.toLowerCase().replaceAll(" ", "-")}
          className={styles["card-img"]}
        />
        <h4 className={styles["card-price"]}>${data?.price}</h4>
      </div>
    </MainLayout>
  );
}
