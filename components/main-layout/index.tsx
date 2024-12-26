import styles from "./main-layout.module.css";
import { useMe } from "../../lib/hooks";
import { useRouter } from "next/router";

export default function MainLayout({ children }: any) {
  const router = useRouter();
  let data;

  if (router.pathname != "/") {
    const userdata: any = useMe();
    data = userdata;
  }

  return (
    <div>
      <header className={styles.header}>{data?.email}</header>
      <div>{children}</div>
      <footer className={styles.footer} />
    </div>
  );
}
