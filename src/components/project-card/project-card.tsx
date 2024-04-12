import Link from "next/link";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
};

const ProjectCard = ({ title, description, techStack }: ProjectCardProps) => {
  return (
    <div className={styles["project-card"]}>
      <h3>
        <Link href="#">{title}</Link>
      </h3>
      <p>{description}</p>
      <code>{techStack.join(", ")}</code>
    </div>
  );
};

export { ProjectCard };
