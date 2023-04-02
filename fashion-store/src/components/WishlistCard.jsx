import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toastProps } from "../constants/constants";

const WishlistCard = ({ item }) => {
  // console.log(item);\

  const toast = useToast();

  const handleRemoveFromWishlist = async () => {
    try {
      const id = item._id;
      console.log(id);
      const res = await fetch(`http://localhost:4500/wishlist/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      // console.log(products);
      toast({
        ...toastProps,
        title: "Success",
        description: data.message,
        status: "success",
      });

      // setWishlistItems(products);
    } catch (error) {
      console.log(error);
      toast({
        ...toastProps,
        title: "Error",
        description: error.message,
        status: "error",
      });
    }
  };
  return (
    <Box
      className="product-card"
      // border="1px solid red"
      bgColor="#fff"
      w="250px"
      borderRadius="5px"

      // _hover={{}}
    >
      <Flex direction="column" p="10px" gap="7px">
        {/* <Flex> */}
        <Box position="relative">
          <Box>
            <Image
              src={item?.image}
              alt={item?.title}
              // h="200px"
              minH="250px"
              w="100%"
            />
          </Box>
          <Button
            variant="link"
            position="absolute"
            top="0px"
            right="0px"
            onClick={handleRemoveFromWishlist}
          >
            <AiOutlineClose fontSize="25px" color="gray" />
          </Button>
        </Box>

        <Heading as="h6" size="xs">
          {item?.brand}
        </Heading>

        <Text color="gray.400" fontSize="15px">
          {item?.title?.length > 25
            ? `${item?.title?.slice(0, 25)}....`
            : item?.title}
        </Text>
        <Heading as="h6" size="xs">
          $10.00
        </Heading>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default WishlistCard;
