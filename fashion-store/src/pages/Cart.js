import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  return (
    <Box bgColor="#f5f5f7">
      <Stack
        w={{ base: "100vw", sm: "100vw", md: "100vw", lg: "80vw" }}
        // border={"2px solid red"}
        margin="auto"
        py="20px"
        bgColor="#fff"
      >
        <Heading as={"h1"} size={"xl"} textAlign="center" my="20px">
          Your Cart: 2 Items
        </Heading>
        <Stack
          gap="20px"
          // position={"relative"}
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        >
          <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "48%" }}
            // border={"1px solid red"}
            height="500px"
            overflow={"scroll"}
            overflowX={"hidden"}
            p="20px"
          >
            {/* card  item  */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            {/* bdfhbdbh */}
          </Box>
          {/* order details */}
          <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "48%" }} p="20px">
            <OrderSummary />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Cart;
