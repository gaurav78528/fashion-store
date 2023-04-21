import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../components/Meta";

const Login = () => {
  const [userInput, setUserInput] = useState({
    // firstName: "",
    email: "",
    password: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  // console.log({ isAuthenticated });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { firstName, email, password } = userInput;

    if (!email || !password) {
      alert("Please fill all deatils");
    } else if (!email.includes("@")) {
      alert("please enter valid email");
    } else if (password.length < 8) {
      alert("Password must be of length 8.");
    } else {
      dispatch(loginUser(userInput, toast));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Meta title={"Login"} />
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
          >
            <Stack spacing={4}>
              {/* <FormControl id="firstName">
                <FormLabel>FirstName</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={userInput.firstName}
                  onChange={handleChange}
                />
              </FormControl> */}
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={userInput.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={userInput.password}
                  onChange={handleChange}
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link href="/forget-password" color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg={"#000"}
                  color={"white"}
                  _hover={{
                    bg: "#e3ae52",
                    color: "#000",
                  }}
                  onClick={handleLogin}
                  isLoading={isLoading}
                  // spinner={<Spinner size={25} color="white" />}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link href="/register" color={"blue.400"}>
                  Register Now
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
