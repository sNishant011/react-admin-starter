import { Box, Button, Heading, HStack, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import PostCard from "@/components/PostCard";

import { useGetAllPostsQuery } from "./postApiSlice";

const PostList = () => {
  const { data, isLoading } = useGetAllPostsQuery(null);
  return (
    <Box>
      <HStack width={"full"} justifyContent={"space-between"}>
        <Heading>All Posts</Heading>
        <Button as={Link} to={"/posts/create"} colorScheme={"facebook"}>
          Create
        </Button>
      </HStack>
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
