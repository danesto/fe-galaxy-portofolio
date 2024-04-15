"use server";

import { addPost, AddPostParams, editPost } from "@/db/queries/post";
import { revalidatePath } from "next/cache";

const createPostAction = async (
  prevState: {
    message: string;
  },
  formData: FormData,
) => {
  const post = {
    title: formData.get("title") as string,
    subtitle: formData.get("subtitle") as string,
    slug: formData.get("slug") as string,
    content: formData.get("content") as string,
  };

  const newPost = await addPost({ ...post });

  return {
    message: `${post.title} is created`,
  };
};

const editPostAction = async (
  prevState: {
    message: string;
  },
  formData: FormData,
) => {
  try {
    const post = {
      title: formData.get("title") as string,
      subtitle: formData.get("subtitle") as string,
      slug: formData.get("slug") as string,
      content: formData.get("content") as string,
    };

    await editPost({ ...post });

    revalidatePath("/dashboard/[slug]", "page");

    return {
      message: `${post.title} is edited`,
    };
  } catch (err) {
    return {
      message: `There was an error editing post ${err}`,
    };
  }
};

export { createPostAction, editPostAction };
