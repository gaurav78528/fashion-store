import {
  Box,
  Card,
  Checkbox,
  Flex,
  Tag,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import "../styles/ourStore.css";
const OurStore = () => {
  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Our Store"} />
      <BreadCrumb title={"Our Store"} />
      <HStack
        spacing="20px"
        align="flex-start"
        justify="space-between"
        // border="1px solid red"
        // my="20px"
        py="20px"
        px="100px"
      >
        <VStack w="20%" spacing="10px">
          <Flex
            direction="column"
            gap="40px"
            bgColor="#fff"
            w="100%"
            borderRadius="5px"
            p="10px"
          >
            <Heading as="h5" size="sm">
              Shop By Categories
            </Heading>
            {/* <Text fontWeight="bold">Shop By Categories</Text> */}
            <Flex direction="column" gap="5px">
              <Text>Watch</Text>
              <Text>Tv</Text>
              <Text>Camera</Text>
              <Text>Laptop</Text>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            gap="40px"
            bgColor="#fff"
            w="100%"
            borderRadius="5px"
            p="10px"
          >
            <Heading as="h5" size="sm">
              Filter By
            </Heading>
            <Flex direction="column" gap="10px">
              <Heading as="h6" size="xs">
                Availability
              </Heading>
              <Checkbox value="" id="">
                In Stock (2)
              </Checkbox>
              <Checkbox value="" id="">
                Out of stock (0)
              </Checkbox>
            </Flex>
            <Flex direction="column" gap="10px">
              <Heading as="h6" size="xs">
                Price
              </Heading>
              <Flex gap="15px" align="center" justify="space-between">
                <HStack>
                  <Text>$</Text>
                  <Input variant="filled" placeholder="From" />
                </HStack>
                <HStack>
                  <Text>$</Text>
                  <Input variant="filled" placeholder="To" />
                </HStack>
              </Flex>
            </Flex>
            <Flex direction="column" gap="10px">
              <Heading as="h6" size="xs">
                Color
              </Heading>
              <Box>
                <ul className="colors">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </Box>
            </Flex>
            <Flex direction="column" gap="10px">
              <Heading as="h6" size="xs">
                Size
              </Heading>
              <Checkbox>S (10)</Checkbox>
              <Checkbox>M (10)</Checkbox>
            </Flex>
          </Flex>
          <Flex
            direction="column"
            gap="40px"
            bgColor="#fff"
            w="100%"
            borderRadius="5px"
            p="10px"
          >
            <Heading as="h5" size="sm">
              Product Tags
            </Heading>
            {/* <Text fontWeight="bold">Shop By Categories</Text> */}
            <Flex gap="5px" flexWrap="wrap">
              <Tag>Headphones</Tag>
              <Tag>Tv</Tag>
              <Tag>Speakers</Tag>
              <Tag>Watch</Tag>
              <Tag>Mobile Phones</Tag>
            </Flex>
          </Flex>
        </VStack>
        <VStack></VStack>
      </HStack>
    </Box>
  );
};

export default OurStore;
