import Link from "next/link";
import styles from "./page.module.css";
import { Button, Card, ProjectCard } from "@/components";
import { listPosts } from "@/db/queries/post";

export default async function Home() {
  const postsList = await listPosts();

  return (
    <div className={styles["page-container"]}>
      <section className={styles["about-section"]}>
        <code>
          <pre>
            {`const who = {
  name: "Danilo Stojanovic",
  role: "Senior Frontend Engineer (Full Stack per need)",
};

const mainTechStack = ["JavaScript", "TypeScript", "ReactJS", "NextJS", "HTML", "CSS"];

const couldHelpWithTeckStack = ["ExpressJS", "PostgreSQL"];

const favoriteTechAndTools = [
  "prisma",
  "next-auth",
  "React server components",
  "NextJS ISR",
  "Server Actions",
  "Route Handlers",
];
`}
          </pre>
        </code>
      </section>
      <section>
        <h1 className={styles["section-title"]}>
          <Link href="#read"># Read preview</Link>
        </h1>
        <div className={styles["read-cards"]}>
          {!!postsList?.length &&
            postsList.map(({ title, slug, subtitle, createdAt }) => {
              return (
                <Card
                  key={title}
                  title={title}
                  description={subtitle}
                  slug={slug}
                  date={createdAt.toDateString()}
                />
              );
            })}

          {!!!postsList?.length && "There are no posts at the moment..."}
        </div>

        {postsList && postsList.length > 4 && (
          <div className={styles["section-cta"]}>
            <Button variant="link">See all</Button>
          </div>
        )}
      </section>

      <section>
        <h1 className={styles["section-title"]}>
          <Link href="#read"># Projects</Link>
        </h1>
        <div className={styles["read-cards"]}>
          <ProjectCard
            title="NextJS scraper with cheerio and redis"
            description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, enim?
        "
            techStack={["NextJS 14", "server actions", "redis", "ssr"]}
          />
        </div>
        <div className={styles["section-cta"]}>
          <Button variant="link">See all</Button>
        </div>
      </section>
    </div>
  );
}
