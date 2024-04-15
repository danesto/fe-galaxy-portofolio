import { eq } from "drizzle-orm";
import { db } from "../client";
import { PostTable } from "../schema";

const listPosts = async () => {
  try {
    const posts = await db.select().from(PostTable);

    return posts;
  } catch (err) {
    console.log("There wan an error fetching posts", err);
  }
};

const getPost = async (slug: string) => {
  try {
    const posts = await db
      .select()
      .from(PostTable)
      .where(eq(PostTable.slug, slug))
      .limit(1);

    return posts[0];
  } catch (err) {
    console.log("There wan an error fetching posts", err);
  }
};

type AddPostParams = {
  title: string;
  slug: string;
  subtitle: string;
  content: string;
};

const addPost = async ({ title, slug, content, subtitle }: AddPostParams) => {
  try {
    const post = await db
      .insert(PostTable)
      .values({ title, slug, content, subtitle });

    return post;
  } catch (err) {
    console.log("There wan an error fetching posts", err);
  }
};

const editPost = async ({ title, slug, content, subtitle }: AddPostParams) => {
  try {
    const post = await db
      .update(PostTable)
      .set({ title, slug, content, subtitle })
      .where(eq(PostTable.slug, slug));

    console.log("post", post);

    return post;
  } catch (err) {
    console.log("There wan an error fetching posts", err);
  }
};

export { listPosts, getPost, addPost, editPost };
export type { AddPostParams };
