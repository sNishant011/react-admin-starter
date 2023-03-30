import { apiSlice } from "@/app/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], null>({
      query: () => "/posts",
      // this tag is used to invalidate the query when a mutation is performed
      // this should be first added in apiSlice tagTypes
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Posts" as const, id })), "Posts"]
          : ["Posts"],
    }),
    getPostById: builder.query<Post, { id: number }>({
      query: ({ id }) => `/posts/${id}`,
      // this tag is used to invalidate the query when a mutation is performed
      providesTags: (_, __, data) => [{ type: "Posts", id: data.id }],
    }),
    createPost: builder.mutation<Post, { post: Post }>({
      query: ({ post }) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<Post, { id: number; post: Partial<Post> }>({
      query: ({ id, post }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: (result) => [{ type: "Posts", id: result?.id }],
    }),
    deletePost: builder.mutation<Post, { id: number }>({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => [{ type: "Posts", id: result?.id }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApiSlice;
