"use client";
import { createPostAction, editPostAction } from "@/actions/posts";
import { useFormState } from "react-dom";
import styles from "./create-post-form.module.css";
import { AddPostParams } from "@/db/queries/post";
import { Button } from "@/components";

const initialState = {
  message: "",
};

type CreateEditPostFormProps = {
  defaultValues?: Partial<AddPostParams>;
};

const CreateEditPostForm = ({ defaultValues }: CreateEditPostFormProps) => {
  const isInEditMode = !!defaultValues;

  const [state, formAction] = useFormState(
    isInEditMode ? editPostAction : createPostAction,
    initialState,
  );

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles["post-meta"]}>
        <div className={styles["form-item"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            id="title"
            defaultValue={defaultValues?.title}
          />
        </div>
        <div className={styles["form-item"]}>
          <label htmlFor="subtitle">Subtitle</label>

          <input
            type="text"
            placeholder="subtitle"
            name="subtitle"
            id="subtitle"
            defaultValue={defaultValues?.subtitle}
          />
        </div>
        <div className={styles["form-item"]}>
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            placeholder="slug"
            name="slug"
            id="slug"
            defaultValue={defaultValues?.slug}
          />
        </div>
      </div>
      <div className={styles["editor-container"]}>
        {!!state.message && (
          <p aria-live="polite" className={styles.callout} role="status">
            {state.message}
          </p>
        )}
        <textarea
          placeholder="content"
          name="content"
          defaultValue={defaultValues?.content}
        ></textarea>
        <Button>{isInEditMode ? "Edit" : "Create"}</Button>
      </div>
    </form>
  );
};

export { CreateEditPostForm };
