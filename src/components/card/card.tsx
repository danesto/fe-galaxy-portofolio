import { Button } from "../button/button";
import styles from "./card.module.css";

type CardProps = {
  title: string;
  description: string | null;
  date: string;
  slug: string;
};

const Card = ({ title, date, description, slug }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-wrapper"]}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{description || ""}</p>
        <div className={styles["card-footer"]}>
          <Button href={`/blog/${slug}`}>Read more</Button>
        </div>
      </div>
    </div>
  );
};

export { Card };
