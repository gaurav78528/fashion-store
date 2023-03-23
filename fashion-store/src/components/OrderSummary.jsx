import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const OrderSummary = ({ cartItems }) => {
  return (
    <>
      <Heading as={"h4"} size={"md"}>
        Order Summary
      </Heading>

      <Box borderTop="1px solid gray" borderBottom="1px solid gray" my="10px">
        <Flex align={"center"} justify={"space-between"} mt="5px">
          <Text fontWeight={500}>Total Items:</Text>
          <Text fontWeight={500}>{cartItems.length}</Text>
        </Flex>
        <Flex align={"center"} justify={"space-between"} mt="5px">
          <Text fontWeight={500}>Total Amt.:</Text>
          <Text fontWeight={500}>$200</Text>
        </Flex>
      </Box>
      <Button
        size="lg"
        bg={"#000"}
        color={"white"}
        _hover={{
          bg: "#e3ae52",
          color: "#000",
        }}
        my="20px"
        w={"full"}
      >
        Checkout
      </Button>
    </>
  );
};

export default OrderSummary;
