import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import WishlistCard from "../components/WishlistCard";
const Wishlist = () => {
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
        <GridItem>
          <WishlistCard />
        </GridItem>
        <GridItem>
          <WishlistCard />
        </GridItem>
        <GridItem>
          <WishlistCard />
        </GridItem>
        <GridItem>
          <WishlistCard />
        </GridItem>
        <GridItem>
          <WishlistCard />
        </GridItem>
        <GridItem>
          <WishlistCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Wishlist;
