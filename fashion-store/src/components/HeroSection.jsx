import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <Grid
      // h="auto"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={4}
      py="40px"
      px={{ base: "0px", sm: "0px", md: "50px", lg: "100px" }}
      // h="500px"
    >
      <GridItem rowSpan={2} colSpan={{ base: "4", sm: "4", md: "4", lg: "2" }}>
        {/* <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Desktop-Banner_Without-Super-Value_1.jpg"
            alt="img"
            borderRadius="5px"
            h="100%"
            w="100%"
            // h="auto"
          /> */}
        <Carousel />
      </GridItem>
      <GridItem display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/Jupiter/COOP/Celebrity-RT-Creative-Asset-Big-Basket-1400-X-800.jpg"
          alt="img"
          borderRadius="5px"
          h="100%"
          //   w="auto"
          // h="auto"
          // border="1px solid red"
        />
      </GridItem>
      <GridItem display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/May/Sub-category_Skincare_Visibiity_750x375.jpg"
          alt="img"
          borderRadius="5px"
          h="100%"
          // border="1px solid red"
        />
      </GridItem>
      <GridItem display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/AMZBESSC0520567_1_N_750X375_40820a01-4b4c-4b15-b2e7-6b6884f65545.jpg"
          alt="img"
          borderRadius="5px"
          h="100%"
        />
      </GridItem>
      <GridItem display={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/Jupiter/COOP/Wedding-Banner.jpg"
          alt="img"
          borderRadius="5px"
          h="100%"
        />
      </GridItem>
    </Grid>
  );
};

export default HeroSection;
