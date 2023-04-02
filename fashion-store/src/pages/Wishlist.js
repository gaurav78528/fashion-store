import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import WishlistCard from "../components/WishlistCard";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistItems } from "../redux/wishlist/action";
const Wishlist = () => {
  const { isLoading, wishlistItems } = useSelector((store) => store.wishlist);

  const dispatch = useDispatch();
  console.log(wishlistItems);

  useEffect(() => {
    dispatch(getWishlistItems());
  }, []);
  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />
      <Flex
        justify={"center"}
        align={"center"}
        flexWrap={"wrap"}
        gap="20px"
        px={{ base: "0px", sm: "0px", md: "50px", lg: "100px" }}
        py="40px"
      >
        {wishlistItems?.map((item) => (
          <WishlistCard key={item._id} item={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default Wishlist;
