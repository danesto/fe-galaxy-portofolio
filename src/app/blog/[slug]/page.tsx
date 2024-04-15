import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./page.module.css";
import { getPost } from "@/db/queries/post";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { notFound } from "next/navigation";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <>
      <div className={styles.container}>
        <MDXRemote
          options={{
            mdxOptions: { rehypePlugins: [{ ...rehypeRaw }, rehypeSanitize] },
          }}
          source={post.content}
        />
      </div>
    </>
  );
};

export default BlogPost;
