import { CreateEditPostForm } from "../_components/create-post-form/create-post-form";
import { getPost } from "@/db/queries/post";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const EditPost = async ({ params }: { params: { ["edit-slug"]: string } }) => {
  const postToEdit = await getPost(params["edit-slug"]);
  console.log("params", params);
  console.log("pst", postToEdit);

  if (!postToEdit) return notFound();

  return (
    <div className={styles["page-container"]}>
      <h1>
        <span>Editing:</span> {postToEdit.title}
      </h1>
      <CreateEditPostForm
        defaultValues={{
          title: postToEdit.title,
          subtitle: postToEdit.subtitle || "",
          content: postToEdit.content,
          slug: postToEdit.slug,
        }}
      />
    </div>
  );
};

export default EditPost;
