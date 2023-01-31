import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";

const CompareProductsCard = () => {
  return (
    <Flex
      direction="column"
      p="10px"
      gap="7px"
      borderBottom="1px solid"
      borderColor="gray.300"
      borderRadius="5px"
      bgColor="#fff"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
    >
      {/* <Flex> */}
      <Box position="relative">
        <Box>
          <Image
            src="https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Makeup/SBC-Makeup_01._SY530_QL85_.jpg"
            alt="product_img"
            // h="200px"
          />
          <Button variant="link" position="absolute" top="5px" right="5px">
            <AiOutlineClose fontSize="25px" color="#fff" />
          </Button>
        </Box>
      </Box>

      <Heading as="h6" size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, animi.
      </Heading>

      <Text>$10.00</Text>
      {/* </Flex> */}
      <Flex
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="gray.300"
        py="10px"
      >
        <Heading as="h6" size="xs">
          Brand :
        </Heading>
        <Text color="gray" fontSize="14px" fontWeight="500">
          Havells
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="gray.300"
        py="10px"
      >
        <Heading as="h6" size="xs">
          Type :
        </Heading>
        <Text color="gray" fontSize="14px" fontWeight="500">
          Tablet
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="gray.300"
        py="10px"
      >
        <Heading as="h6" size="xs">
          SKU :
        </Heading>
        <Text color="gray" fontSize="14px" fontWeight="500">
          SKU033
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="gray.300"
        py="10px"
      >
        <Heading as="h6" size="xs">
          Availability :
        </Heading>
        <Text color="gray" fontSize="14px" fontWeight="500">
          In Stock
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="gray.300"
        py="10px"
      >
        <Heading as="h6" size="xs">
          Color :
        </Heading>
        <Flex justify="center" align="center" gap="10px">
          <Box h="15px" w="15px" bg="red" borderRadius="50%"></Box>
          <Box h="15px" w="15px" bg="red" borderRadius="50%"></Box>
          <Box h="15px" w="15px" bg="red" borderRadius="50%"></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompareProductsCard;
