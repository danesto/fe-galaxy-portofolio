import { Card } from "@/components";
import { listPosts } from "@/db/queries/post";
import styles from "./page.module.css";

const Blog = async () => {
  const postsList = await listPosts();

  return (
    <div className={styles["posts-list"]}>
      {postsList?.map((post) => (
        <Card
          key={post.title}
          title={post.title}
          description={post.subtitle}
          slug={post.slug}
          date={post.createdAt.toDateString()}
        />
      ))}
    </div>
  );
};

export default Blog;
