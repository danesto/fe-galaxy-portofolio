import Link from "next/link";
import { navItems } from "./constants";
import styles from "./navigtion.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles["nav-items-container"]}>
        {navItems.map((navItem) => {
          return (
            <Link
              key={navItem.label}
              href={navItem.href}
              className={styles["nav-link"]}
            >
              {navItem.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export { Navigation };
