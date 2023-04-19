import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../redux/auth/action";

const Account = () => {
  const navigate = useNavigate();

  const { isLoading, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log(user, isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    } else {
      dispatch(loadUser());
    }
  }, []);
  return (
    <>
      {isLoading ? (
        "loading.."
      ) : (
        <Stack
          justifyContent={"space-around"}
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          align={"center"}
          p={{ base: "40px", sm: "40px", md: "40px", lg: "80px" }}
        >
          <VStack gap="30px" align={"center"} justifyContent={"center"}>
            <Heading as="h2" size="lg" fontWeight={500}>
              My Account
            </Heading>
            <Avatar
              name={user?.firstName}
              bgColor={"gray.200"}
              size={"2xl"}
              height={200}
              w={200}
              // src="https://bit.ly/tioluwani-kolawole"
            />
            <Button
              size="md"
              px="60px"
              // py="0"
              bg={"#000"}
              color={"white"}
              _hover={{
                bg: "#e3ae52",
                color: "#000",
              }}
              fontSize={{
                base: "14px",
                sm: "16px",
                md: "17px",
                lg: "17px",
              }}
              // onClick={() => handleAddToCart(product)}
            >
              Edit Profile
            </Button>
          </VStack>
          <VStack
            w={{ base: "90%", sm: "50%", md: "40%", lg: "30%" }}
            m="auto"
            justifyContent={"center"}
            alignItems={"start"}
            // py="40px"
            pt="40px"
            gap="20px"
          >
            <Box>
              <Heading as="h5" size="sm" fontWeight={500} textAlign={"left"}>
                Username
              </Heading>
              <Text color="gray" size={"md"}>
                {user?.firstName}
                {/* Gaurav */}
              </Text>
            </Box>
            {/* <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            variant="flushed"
            color="gray"
            // value={user.firstname}
          />
        </FormControl> */}
            {/* <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            variant="flushed"
            color="gray"
            // value={user.email}
          />
        </FormControl> */}
            <Box>
              <Heading as="h5" size="sm" fontWeight={500} textAlign={"left"}>
                Email
              </Heading>
              <Text color="gray" size={"md"}>
                {user?.email}
              </Text>
            </Box>
            <Box>
              <Heading as="h5" size="sm" fontWeight={500} textAlign={"left"}>
                Joined On
              </Heading>
              <Text color="gray" size={"md"}>
                {/* {String(user.createdAt).substr(0, 10)}
                 */}
                hello
              </Text>
            </Box>
            {/* <FormControl>
          <FormLabel>Joined On</FormLabel>
          <Input
            type="text"
            pointerEvents="none"
            value={String(user.createdAt).substr(0, 10)}
            variant="unstyled"
            color="gray"
          />
        </FormControl> */}
            <Button
              size="md"
              px="60px"
              w="100%"
              // py="0"
              bg="#e3ae52"
              color="#000"
              _hover={{
                bg: "#000",
                color: "white",
              }}
              fontSize={{
                base: "14px",
                sm: "16px",
                md: "17px",
                lg: "17px",
              }}
              onClick={() => navigate("/my-orders")}
            >
              My Orders
            </Button>
            <Button
              size="md"
              px="60px"
              w="100%"
              variant="outline"
              colorScheme="blackAlpha"
              // py="0"
              // bg={"#000"}
              color={"#000"}
              _hover={{
                bg: "#000",
                color: "#fff",
              }}
              fontSize={{
                base: "14px",
                sm: "16px",
                md: "17px",
                lg: "17px",
              }}
              // onClick={() => handleAddToCart(product)}
            >
              Change Password
            </Button>
          </VStack>
        </Stack>
      )}
    </>
  );
};

export default Account;
