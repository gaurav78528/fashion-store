import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import WishlistCard from "../components/WishlistCard";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../redux/wishlist/action";
const Wishlist = () => {
  const { isLoading, wishlistItems } = useSelector((store) => store.wishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlistItems());
  }, [wishlistItems]);
  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />
      <Grid
        px={{ base: "0px", sm: "0px", md: "50px", lg: "100px" }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        py="40px"
        gap="20px"
      >
        {wishlistItems?.map((item) => {
          return (
            <GridItem key={item._id}>
              <WishlistCard item={item} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Wishlist;
