import { Link } from "react-router-dom";

import { useGetAllPostsQuery } from "./postApiSlice";

const PostList = () => {
  const { data, isLoading, isFetching } = useGetAllPostsQuery(null);
  return (
    <div>
      <div className="flex w-full justify-between my-4">
        <h1 className="text-3xl font-bold text-gray-900">All Posts</h1>

        <Link className="btn btn-primary" to="/posts/create">
          Create Post
        </Link>
      </div>
      {isFetching && <div>Fetching</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
