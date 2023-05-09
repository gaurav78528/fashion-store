import React, { useEffect } from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAdminProducts } from "../redux/products/action";
import ProductItem from "../components/Admin/ProductItem";
import { DELETE_PRODUCT_RESET } from "../redux/products/actionTypes";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { isLoading, users, error } = useSelector((state) => state.allUsers);
  //   console.log(products);

  // useEffect(() => {}, [dispatch]);

  const {
    error: err,
    isLoading: loading,
    isDeleted,
    message,
  } = useSelector((state) => state.product);

  const handleDeleteProduct = (id) => {
    // dispatch(deleteProduct(id));
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
        All Users
      </Heading>
      {/* <Flex justify={"center"} gap="20px" position="relative"> */}
      {/* <SideBarComp /> */}

      <table className="table">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.map((item) => (
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

export default AllUsers;
