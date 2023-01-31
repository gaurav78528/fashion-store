import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const WishlistCard = () => {
  return (
    <Box
      className="product-card"
      // border="1px solid red"
      bgColor="#fff"
      borderRadius="5px"

      // _hover={{}}
    >
      <Flex direction="column" p="10px" gap="7px">
        {/* <Flex> */}
        <Box position="relative">
          <Box>
            <Image
              src="https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Makeup/SBC-Makeup_01._SY530_QL85_.jpg"
              alt="product_img"
              // h="200px"
            />
          </Box>
          <Button variant="link" position="absolute" top="0px" right="0px">
            <AiOutlineClose fontSize="25px" color="#fff" />
          </Button>
        </Box>

        <Heading as="h6" size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi.
        </Heading>
        <Heading as="h6" size="xs">
          $10.00
        </Heading>
        {/* </Flex> */}
      </Flex>
    </Box>
  );
};

export default WishlistCard;
