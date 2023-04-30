import React from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  GridItem,
  Grid,
} from "@chakra-ui/react";
// import SideBarComp from "../components/Admin/SideBarComp";

const Dashboard = () => {
  return (
    <Flex>
      <SideBarComp />
      {/* <div>dashboard</div> */}
      <Stack w="100%" bgColor="#f5f5f7">
        <Heading as="h1" size="lg" mx="auto" my="20px">
          Dashboard
        </Heading>
        <Box
          w="100%"
          // h="200px"
          opacity="0.8"
          bg="#232f3e"
          color="#fff"
          py="80px"
          borderRadius="5px"
          textAlign="center"
        >
          <Text>Total Amount:</Text>
          <Text>2000</Text>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            w="100%"
            // h="200px"
            opacity="0.8"
            bg="#232f3e"
            color="#fff"
            py="80px"
            borderRadius="5px"
            textAlign="center"
          >
            <Text>Products</Text>
            <Text>43</Text>
          </GridItem>
          <GridItem
            w="100%"
            // h="200px"
            opacity="0.8"
            bg="#232f3e"
            color="#fff"
            py="80px"
            borderRadius="5px"
            textAlign="center"
          >
            <Text>Orders</Text>
            <Text>10</Text>
          </GridItem>
          <GridItem
            w="100%"
            // h="200px"
            opacity="0.8"
            bg="#232f3e"
            color="#fff"
            py="80px"
            borderRadius="5px"
            textAlign="center"
          >
            <Text>Users</Text>
            <Text>100</Text>
          </GridItem>
          <GridItem
            w="100%"
            // h="200px"
            opacity="0.8"
            bg="#232f3e"
            color="#fff"
            py="80px"
            borderRadius="5px"
            textAlign="center"
          >
            <Text>Out Of Stock</Text>
            <Text>3</Text>
          </GridItem>
        </Grid>
        {/* <Stack
          direction="row"
          justifyContent="center"
          m="auto"
          gap="20px"
          alignItems="center"
        >
          <Flex
            h="150px"
            w="150px"
            direction="column"
            justify="center"
            alignItems="center"
            bg="green"
            borderRadius="50%"
          >
            <Text>Products</Text>
            <Text>50</Text>
          </Flex>
          <Flex
            h="150px"
            w="150px"
            direction="column"
            justify="center"
            alignItems="center"
            bg="green"
            borderRadius="50%"
          >
            <Text>Products</Text>
            <Text>50</Text>
          </Flex>
          <Flex
            h="150px"
            w="150px"
            direction="column"
            justify="center"
            alignItems="center"
            bg="green"
            borderRadius="50%"
          >
            <Text>Products</Text>
            <Text>50</Text>
          </Flex>
        </Stack> */}
      </Stack>
    </Flex>
  );
};

export default Dashboard;
