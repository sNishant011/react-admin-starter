import { FormEvent } from "react";

import { useCreatePostMutation, useGetAllPostsQuery } from "./postApiSlice";

const PostList = () => {
  const { data, isLoading, isFetching } = useGetAllPostsQuery(null);
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
      <div style={{ display: "flex" }}>
        <div>
          <h1>All Posts</h1>
          {isFetching && <div>Fetching</div>}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {data?.map((post) => (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <h1>Add Post</h1>
          <form onSubmit={handlePostAdd}>
            <input type="text" placeholder="Title" name="title" required />
            <input type="text" placeholder="Content" name="body" required />
            <button type="submit">{isPostAdding ? "Adding Post" : "Add Post"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostList;
