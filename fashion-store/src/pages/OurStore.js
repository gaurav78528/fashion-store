import {
  Box,
  Checkbox,
  Flex,
  Tag,
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
  DrawerBody,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { AiFillFilter } from "react-icons/ai";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import FilterPanel from "../components/FilterPanel";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/products/action";
import { useSelector, useDispatch } from "react-redux";
import "../styles/ourStore.css";

const OurStore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { isLoading, products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(location);
  useEffect(() => {
    if (location || products.length === 0) {
      const getProductParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getProducts(getProductParams));
    }
  }, [location.search]);
  // console.log(products);
  if (isLoading) return <h1>Loading....</h1>;

  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Our Store"} />
      <BreadCrumb title={"Our Store"} />
      <HStack
        spacing={{ base: "0", sm: "0", md: "0", lg: "20px" }}
        align="flex-start"
        justify="space-between"
        // border="1px solid red"
        // my="20px"
        py="20px"
        px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
      >
        <FilterPanel />
        <VStack w="100%">
          <Flex bgColor="#fff" w="100%" px="20px" py="10px" borderRadius="5px">
            <Flex
              align="center"
              gap={{ base: "10px", sm: "10px", md: "20px", lg: "40px" }}
              w="100%"
            >
              <Text>Sort By:</Text>
              <Select
                placeholder="Select option"
                w="50%"
                size="sm"
                variant="filled"
              >
                <option value="manual">Featured</option>
                <option value="best-selling">Best Selling</option>
                <option value="title-asc">Title, A-Z</option>
                <option value="title-desc">Title, Z-A</option>
                <option value="price-asc">Price, low to high</option>
                <option value="price-desc">Price, high to low</option>
                <option value="created-asc">Date, old to new</option>
                <option value="created-desc">Date, new to old</option>
              </Select>
              <Button
                ref={btnRef}
                onClick={onOpen}
                display={{
                  base: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                }}
              >
                <AiFillFilter />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  {/* <DrawerHeader>Create your account</DrawerHeader> */}

                  <DrawerBody>
                    <VStack w="100%" spacing="10px">
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

                        <Flex direction="column" gap="5px">
                          <Checkbox value="" id="">
                            Bag
                          </Checkbox>
                          <Checkbox value="" id="">
                            Sandal
                          </Checkbox>
                          <Checkbox value="" id="">
                            Clothing
                          </Checkbox>
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
                          <Flex
                            gap="15px"
                            align="center"
                            justify="space-between"
                          >
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
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </Flex>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="20px"
          >
            {/* ===========================map data here =========================== */}
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <GridItem key={product.id}>
                    <ProductCard productData={product} />
                  </GridItem>
                );
              })}
          </Grid>
        </VStack>
      </HStack>
    </Box>
  );
};

export default OurStore;
