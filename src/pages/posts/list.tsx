import { Box, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";

import PostCard from "@/components/PostCard";

import { useGetAllPostsQuery } from "./postApiSlice";

const PostList = () => {
  const { data, isLoading, isFetching } = useGetAllPostsQuery(null);
  return (
    <Box>
      <Heading>All Posts</Heading>
      {isLoading && (
        <SimpleGrid columns={3} spacing={10}>
          <Skeleton height="250px" />
          <Skeleton height="250px" />
          <Skeleton height="250px" />
          <Skeleton height="250px" />
        </SimpleGrid>
      )}
      <SimpleGrid columns={3} spacing={10}>
        {data?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PostList;
