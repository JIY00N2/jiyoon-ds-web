import { Components } from "./Components";
import { Overview } from "./Overview";
import styles from "./sidebar.module.css";

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
