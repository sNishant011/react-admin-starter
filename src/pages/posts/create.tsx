import { FormEvent } from "react";

import { useCreatePostMutation } from "./postApiSlice";

const CreatePost = () => {
  const [createPost, { isLoading: isPostAdding }] = useCreatePostMutation();

  const handlePostAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const body = formData.get("body");
    if (typeof title === "string" && typeof body === "string") {
      const post: Post = { title, body, userId: 11 };
      createPost({ post })
        .unwrap()
        .then((res) => {
          console.log(res);
          alert("Post added");
        })
        .catch((err) => {
          console.log(err);
          alert("Error adding post");
        });
    }
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>

      <form onSubmit={handlePostAdd} className="flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
            name="title"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="label">
            Body
          </label>
          <input
            type="text"
            placeholder="Content"
            name="body"
            id="body"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </div>
        <button
          className={`btn btn-primary w-fit ${isPostAdding && "loading"}`}
          type="submit"
        >
          {isPostAdding ? "Adding Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
