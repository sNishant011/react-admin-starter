import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { setIsAuthenticated } from "@/app/authSlice";
import { useAppDispatch } from "@/app/store";
import { loginPaylod } from "@/types";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginPaylod>();
  const dispatch = useAppDispatch();

  const handleLogin = (data: loginPaylod) => {
    console.log(data);
    dispatch(setIsAuthenticated(true));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          as={"form"}
          onSubmit={handleSubmit(handleLogin)}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={Boolean(errors.password)}>
              <FormLabel>Email address</FormLabel>
              <Input
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    // match regex
                    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    return regex.test(value) || "Email is invalid";
                  },
                })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={Boolean(errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type={"submit"}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
