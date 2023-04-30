import React from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import { Box, Flex } from "@chakra-ui/react";

const AllProducts = () => {
  return (
    <Flex bg="red">
      <SideBarComp />
      <div>ALL PRODUCTS</div>
    </Flex>
  );
};

export default AllProducts;
