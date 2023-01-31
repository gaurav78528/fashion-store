import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularProducts } from "../redux/popularProducts/action";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const popularProducts = useSelector(
    (store) => store.popularProductsReducer.popularProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (popularProducts.length === 0) {
      dispatch(getPopularProducts());
    }
  }, []);
  return (
    <Box>
      <Heading as="h2" size="lg" fontWeight={500} my="30px" border>
        Popular Products
      </Heading>
      <Flex overflow="auto" className="hide-scrollbar" gap="20px">
        {popularProducts.length > 0 &&
          popularProducts.map((product) => {
            return (
              <Box key={product.id}>
                <ProductCard productData={product} />
              </Box>
            );
          })}
      </Flex>
    </Box>
  );
};

export default PopularProducts;
