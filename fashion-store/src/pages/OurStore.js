import {
  Box,
  Grid,
  GridItem,
  HStack,
  Select,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useLocation, useSearchParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import FilterPanel from "../components/FilterPanel";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../redux/products/action";
import { useSelector, useDispatch } from "react-redux";
import "../styles/ourStore.css";
import Loader from "../components/Loader";
import SortingPanel from "../components/SortingPanel";
// import MobileFilterPanel from "../components/FilterPanel";

const OurStore = () => {
  const { isLoading, products } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(products);
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

  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Our Store"} />
      <BreadCrumb title={"Our Store"} />
      <HStack
        spacing={{ base: "0", sm: "0", md: "0", lg: "20px" }}
        align="flex-start"
        justify="space-between"
        py="20px"
        px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
      >
        {/* <FilterPanel /> */}
        <VStack w="100%">
          <Box bgColor="#fff" w="100%" px="20px" py="10px" borderRadius="5px">
            <Flex
              align="center"
              gap={{ base: "10px", sm: "10px", md: "20px", lg: "40px" }}
              w="100%"
            >
              <SortingPanel />
              <FilterPanel />
            </Flex>
          </Box>
          <Flex
            justify={"center"}
            align={"center"}
            flexWrap={"wrap"}
            gap="20px"
          >
            {/* ===========================map data here =========================== */}
            {isLoading
              ? products.map((product, id) => {
                  return (
                    <GridItem key={id}>
                      <Loader heightProps="350px" widthProps="250px" />
                    </GridItem>
                  );
                })
              : products.map((product) => {
                  return (
                    <GridItem key={product._id}>
                      <ProductCard productData={product} />
                    </GridItem>
                  );
                })}
          </Flex>
        </VStack>
      </HStack>
    </Box>
  );
};

export default OurStore;
