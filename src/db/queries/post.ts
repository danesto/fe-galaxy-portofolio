import { db } from "../client";
import { PostTable } from "../schema";

const getPosts = async () => {
  try {
    const posts = await db.select().from(PostTable);

    return posts;
  } catch (err) {
    console.log("There wan an error fetching posts", err);
  }
};

export { getPosts };
