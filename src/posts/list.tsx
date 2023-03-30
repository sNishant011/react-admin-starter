import { Link } from "react-router-dom";

import { useGetAllPostsQuery } from "./postApiSlice";

const PostList = () => {
  const { data, isLoading, isFetching } = useGetAllPostsQuery(null);
  return (
    <div>
      <h1>All Posts</h1>
      <Link to="/create">Create Post</Link>
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
  );
};

export default PostList;
