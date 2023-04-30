import React from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import { Box, Flex } from "@chakra-ui/react";
const AddProduct = () => {
  return (
    <Flex bg="red">
      <SideBarComp />
      <div>Add Products</div>
    </Flex>
  );
};

export default AddProduct;
