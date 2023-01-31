import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const ResetPassword = () => {
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
          Enter New Password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            placeholder="Enter new password"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Confirm New Password</FormLabel>
          <Input
            placeholder="Confirm new password"
            _placeholder={{ color: "gray.500" }}
            type="password"
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
          >
            Change Password
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default ResetPassword;
