import React, { useEffect } from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProducts } from "../redux/products/action";
import ProductItem from "../components/Admin/ProductItem";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getAdminProducts());
  }, [dispatch]);
  return (
    <Box>
      <Heading w="100%" textAlign={"center"} fontWeight={600} my="20px">
        All Products
      </Heading>
      <Flex justify={"center"} gap="20px" position="relative">
        <SideBarComp />

        <table className="table">
          <thead>
            <tr>
              <th>PorductID</th>
              <th>Title</th>
              <th>Stock</th>
              <th>Mrp</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products?.map((item) => (
                <ProductItem key={item._id} item={item} />
              ))}
          </tbody>
        </table>
      </Flex>
    </Box>
  );
};

export default AllProducts;
