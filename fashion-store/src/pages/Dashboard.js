import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
// import SideBarComp from "../components/Admin/SideBarComp";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import { getAdminProducts } from "../redux/products/action";
import DashboardCard from "../components/Admin/DashboardCard";
import { getAllOrders } from "../redux/orders/action";
import { getAllUsers } from "../redux/users/action";

const Dashboard = () => {
  const items = [1, 2, 3, 4];
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.products);
  // console.log(products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let outOfStock = 0;
  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });
  return (
    <Flex bgColor="#f5f5f7" position="relative">
      <SideBarComp />
      {/* <div>dashboard</div> */}
      <Stack w="100%" p="20px" pl="100px">
        <Heading w="100%" textAlign={"center"} fontWeight={600} my="20px">
          Dashboard
        </Heading>
        <Box
          w="100%"
          // h="200px"
          opacity="0.6"
          bg="#232f3e"
          color="#fff"
          py="80px"
          borderRadius="5px"
          textAlign="center"
        >
          <Text fontSize="25px" fontWeight={600}>
            Total Amount:
          </Text>
          <Text fontSize="25px">2000</Text>
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
          <DashboardCard title="Products" count={products && products.length} />
          <DashboardCard title="Orders" count={orders && orders.length} />
          <DashboardCard title="Users" count={users && users.length} />
          <DashboardCard title="Out Of Stock" count={outOfStock} />

          {/* <GridItem
            w="100%"
            // h="200px"
            opacity="0.8"
            // bg="#232f3e"
            // color="#fff"
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
          </GridItem> */}
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
