import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import BreadCrumb from "../components/BreadCrumb";
import CompareProductsCard from "../components/CompareProductsCard";
import Meta from "../components/Meta";

const CompareProducts = () => {
  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Compare Products"} />
      <BreadCrumb title={"Compare Products"} />

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: "10px", sm: "10px", md: "20px", lg: "30px" }}
        px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
        py={{ base: "20px", sm: "20px", md: "40px", lg: "80px" }}
      >
        <GridItem>
          <CompareProductsCard />
        </GridItem>
        <GridItem>
          <CompareProductsCard />
        </GridItem>
        <GridItem>
          <CompareProductsCard />
        </GridItem>
        <GridItem>
          <CompareProductsCard />
        </GridItem>
        <GridItem>
          <CompareProductsCard />
        </GridItem>
        <GridItem>
          <CompareProductsCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CompareProducts;
