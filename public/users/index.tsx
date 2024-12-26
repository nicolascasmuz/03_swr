import type { NextPage } from "next";
import styles from "./users.module.css";
import MainLayout from "../../components/main-layout";
import { useMe } from "../../lib/hooks";
import Product from "components/product";

const Login: NextPage = () => {
  const data: any = useMe();

  return (
    <MainLayout>
      <div className={styles["general-container"]}>
        <div className={styles["user-data-container"]}>
          <h2 className={styles["user-data"]}>Datos </h2>
          <p className={styles["user-data__nickname"]}>
            Nickname: {data?.userData.nickname}
          </p>
          <p className={styles["user-data__age"]}>Edad: {data?.userData.age}</p>
          <p className={styles["user-data__weight"]}>
            Peso: {data?.userData.weight}
          </p>
          <p className={styles["user-data__height"]}>
            Estatura: {data?.userData.height}
          </p>
        </div>
        <div className={styles["user-address-container"]}>
          <h2 className={styles["user-address"]}>Dirección </h2>
          <p className={styles["user-address__city"]}>
            Ciudad: {data?.address.city}
          </p>
          <p className={styles["user-address__street"]}>
            Calle: {data?.address.street}
          </p>
          <p className={styles["user-address__number"]}>
            Numeración: {data?.address.number}
          </p>
        </div>
        <Product />
      </div>
    </MainLayout>
  );
};

export default Login;
