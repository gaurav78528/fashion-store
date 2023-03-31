import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts } from "../redux/featuredCollections/action";
import ProductCard from "./ProductCard";

const FeaturedCollection = () => {
  const featuredCollection = useSelector(
    (store) => store.featuredProductsReducer.featuredProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (featuredCollection.length === 0) {
      dispatch(getFeaturedProducts());
    }
  }, []);
  return (
    <Box>
      <Heading as="h2" size="lg" fontWeight={500} my="30px" border>
        Featured Collection
      </Heading>
      <Flex overflowX="auto" className="hide-scrollbar" gap="20px">
        {featuredCollection.length > 0 &&
          featuredCollection.map((product) => {
            return (
              <Box key={product._id}>
                <ProductCard productData={product} />
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
};

export default FeaturedCollection;
