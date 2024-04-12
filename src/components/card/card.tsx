import { Button } from "../button/button";
import styles from "./card.module.css";

type CardProps = {
  title: string;
  description: string;
  date: string;
};

const Card = ({ title, date, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-wrapper"]}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles["card-footer"]}>
          <Button href="#">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export { Card };
