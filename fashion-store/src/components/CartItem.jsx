import React from "react";
import { Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
const CartItem = () => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      borderRadius={"5px"}
      //   background={"rgba(0,0,0,0.2)"}
      //   boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
      //   border={"1px solid blue"}
      gap="10px"
      p={"10px"}
      direction={{ base: "column", sm: "row", md: "row", lg: "row" }}
      mt="10px"
    >
      <Image
        boxSize="150px"
        objectFit="cover"
        src="https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg"
        alt="Dan Abramov"
      />
      <Flex
        justify={"space-around"}
        align={"center"}
        border="1px solid green"
        w={"full"}
      >
        <Text fontWeight={600}>Product Name</Text>
        <HStack border={"1px solid red"}>
          <Button size="sm" variant={"ghost"}>
            <AiOutlineMinus fontWeight={800} />
          </Button>
          <Text fontWeight={600}>1</Text>
          <Button size="sm" variant={"ghost"}>
            <AiOutlinePlus fontWeight={800} />
          </Button>
        </HStack>
        <Button size="sm" variant={"link"}>
          <BsTrashFill color="red" fontSize={"25px"} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartItem;
