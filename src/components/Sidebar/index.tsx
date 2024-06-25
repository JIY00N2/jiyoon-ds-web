import { Components } from "./Components";
import { Overview } from "./Overview";
import styles from "./sidebar.module.css";

// TODO - active link, hover link

export const Sidebar = () => {
  return (
    <aside className={styles.layout}>
      <div className={styles.container}>
        <Overview />
        <Components />
      </div>
    </aside>
  );
};
