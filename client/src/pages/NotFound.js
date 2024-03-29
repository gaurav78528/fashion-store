import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgColor="#000"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="#000"
        bgColor="#000"
        _hover={{ bgColor: "#e3ae52", color: "#000" }}
        color="white"
        variant="solid"
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
