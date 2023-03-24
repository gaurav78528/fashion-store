import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
} from "../redux/cart/action";
const CartItem = ({ cartItem }) => {
  const { _id: id, title, colors, qty } = cartItem;

  const dispatch = useDispatch();

  const handleQtyIncrement = (id) => {
    dispatch(incrementCartItem(id));
  };
  const handleQtyDecrement = (id) => {
    dispatch(decrementCartItem(id));
  };

  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <Flex
      justify={"space-between"}
      align={{
        base: "center",
        sm: "space-between",
        md: "space-between",
        lg: "space-between",
      }}
      borderRadius={"5px"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
      // border={"1px solid blue"}
      gap="10px"
      p={"10px"}
      direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
      mt="10px"
    >
      <Image
        boxSize="150px"
        objectFit="cover"
        src={colors?.[0]?.images?.[0]}
        alt={title}
      />
      <Flex
        align={"center"}
        justify={"center"}
        flexDirection={{ base: "column", sm: "row", md: "row", lg: "column" }}
        gap={{ base: "15px", sm: "15px", md: "15px", lg: "30px" }}
        // w="auto"
        p="10px"
        // border={"1px solid green"}
      >
        <Text fontWeight={600}>{title}</Text>
        <Flex justify={"space-around"} align={"center"} w={"full"}>
          <HStack border={"1px solid gray"} borderRadius="5px">
            <Button size="sm" variant={"ghost"} isDisabled={cartItem.qty <= 1}>
              <AiOutlineMinus
                fontWeight={800}
                onClick={() => handleQtyDecrement(id)}
              />
            </Button>
            <Text fontWeight={600}>{qty}</Text>
            <Button
              size="sm"
              variant={"ghost"}
              isDisabled={cartItem.qty >= 5}
              onClick={() => handleQtyIncrement(id)}
            >
              <AiOutlinePlus fontWeight={800} />
            </Button>
          </HStack>
          <Button
            size="sm"
            variant={"link"}
            onClick={() => handleDeleteCartItem(id)}
          >
            <BsTrashFill color="red" fontSize={"25px"} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
