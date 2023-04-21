import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { updatePassword } from "../redux/profile/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const [userInput, setUserInput] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isUpdated } = useSelector((store) => store.updatePassword);
  const toast = useToast();
  const handleUpdatePassword = () => {
    dispatch(updatePassword(toast, userInput));
    if (!isLoading && isUpdated) {
      navigate("/profile");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Update Password
        </Heading>
        <FormControl isRequired>
          <FormLabel>Old Password</FormLabel>
          <Input
            placeholder="Enter Old Password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            name="oldPassword"
            value={userInput.oldPassword}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            placeholder="Enter New Password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            name="newPassword"
            value={userInput.newPassword}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Confirm New Password</FormLabel>
          <Input
            placeholder="Confirm New Password"
            _placeholder={{ color: "gray.500" }}
            type="password"
            name="confirmPassword"
            value={userInput.confirmPassword}
            onChange={handleChange}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"#000"}
            color={"white"}
            _hover={{
              bg: "#e3ae52",
              color: "#000",
            }}
            isLoading={isLoading}
            onClick={handleUpdatePassword}
          >
            Update Password
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default UpdatePassword;
