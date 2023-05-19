import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProductCategory = () => {
  return (
    <Grid
      borderRadius="5px"
      // templateRows="repeat(2, 1fr)"
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      // display={{ base: "none", sm: "none", md: "block", lg: "block" }}
      gap="1px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
    >
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          justify={"center"}
          align={"center"}
          gap="20px"
          py="30px"
          bgColor="#fff"
        >
          <Box>
            <Heading as="h6" size="xs">
              Music & Gaming
            </Heading>
            <Text>10 Items</Text>
          </Box>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
            alt="img"
            w="30%"
            // h="50%"
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default ProductCategory;
