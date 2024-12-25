import styles from "./main-layout.module.css";
import { useMe } from "../../lib/hooks";

export default function MainLayout({ children }: any) {
  const data: any = useMe();

  return (
    <div>
      <header className={styles.header}>{ data?.email }</header>
      <div>{children}</div>
      <footer className={styles.footer} />
    </div>
  );
}
