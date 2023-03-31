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
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { AiFillFilter } from "react-icons/ai";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ShopByBrand from "../components/ShopByBrand";
//
const Shop = () => {
  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Blogs"} />
      <BreadCrumb title={"Blogs"} />
      <HStack
        spacing={{ base: "0", sm: "0", md: "0", lg: "20px" }}
        align="flex-start"
        justify="space-between"
        // border="1px solid red"
        // my="20px"
        py="20px"
        px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
      >
        <VStack
          w="20%"
          spacing="10px"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <Flex
            direction="column"
            gap="40px"
            bgColor="#fff"
            w="100%"
            borderRadius="5px"
            p="10px"
          >
            <Heading as="h5" size="sm">
              Find By Categories
            </Heading>

            <Flex direction="column" gap="5px">
              <Text>Watch</Text>
              <Text>Tv</Text>
              <Text>Camera</Text>
              <Text>Laptop</Text>
            </Flex>
          </Flex>
        </VStack>
        <VStack w="100%">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="20px"
          >
            <GridItem>
              <ShopByBrand />
            </GridItem>
            <GridItem>
              <ShopByBrand />
            </GridItem>
            <GridItem>
              <ShopByBrand />
            </GridItem>
          </Grid>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Shop;
