import { Components } from "./Components";
import { Overview } from "./Overview";
import styles from "./sidebar.module.css";

export const Sidebar = ({ lng }: { lng: string }) => {
  return (
    <aside className={styles.layout}>
      <div className={styles.container}>
        <Overview lng={lng} />
        <Components lng={lng} />
      </div>
    </aside>
  );
};
