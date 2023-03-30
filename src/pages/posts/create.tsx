import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { Post } from "@/types";

import { useCreatePostMutation } from "./postApiSlice";

const CreatePost = () => {
  const [createPost, { isLoading: isPostAdding }] = useCreatePostMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Post>();
  const toast = useToast();

  const handlePostAdd = (data: Post) => {
    createPost({ post: data })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast({
          title: "Success",
          description: "Post created successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      });
  };
  return (
    <div>
      <Heading mb={"1rem"}>Create Post</Heading>

      <chakra.form
        maxW={"xl"}
        onSubmit={handleSubmit(handlePostAdd)}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        backgroundColor={"white"}
        p={8}
        borderRadius={"md"}
      >
        <FormControl isInvalid={Boolean(errors.title)}>
          <FormLabel>Title</FormLabel>
          <Input
            {...register("title", {
              required: "Title is required",
            })}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.title)}>
          <FormLabel>Content</FormLabel>
          <Textarea
            {...register("body", {
              required: "Body is required",
            })}
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <Button
          className={`btn btn-primary w-fit ${isPostAdding && "loading"}`}
          type="submit"
          isLoading={isPostAdding}
          loadingText="Creating"
          colorScheme={"blue"}
        >
          Create
        </Button>
      </chakra.form>
    </div>
  );
};

export default CreatePost;
