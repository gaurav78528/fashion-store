import React, { useEffect } from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAdminProducts } from "../redux/products/action";
import ProductItem from "../components/Admin/ProductItem";
import { DELETE_PRODUCT_RESET } from "../redux/products/actionTypes";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useSelector((state) => state.products);
  console.log(products);

  // useEffect(() => {}, [dispatch]);

  const {
    error,
    isLoading: loading,
    isDeleted,
    message,
  } = useSelector((state) => state.product);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (isDeleted) {
      alert(message);
    }
    dispatch({ type: DELETE_PRODUCT_RESET });
    dispatch(getAdminProducts());
  }, [error, dispatch, isDeleted]);
  return (
    <Box>
      <Heading w="100%" textAlign={"center"} fontWeight={600} my="20px">
        All Products
      </Heading>
      {/* <Flex justify={"center"} gap="20px" position="relative"> */}
      {/* <SideBarComp /> */}

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
              <ProductItem
                key={item._id}
                item={item}
                loading={loading}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
        </tbody>
      </table>
      {/* </Flex> */}
    </Box>
  );
};

export default AllProducts;
