import React, { useEffect } from "react";
import SideBarComp from "../components/Admin/SideBarComp";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAdminProducts } from "../redux/products/action";
import ProductItem from "../components/Admin/ProductItem";
import { DELETE_PRODUCT_RESET } from "../redux/products/actionTypes";
import User from "../components/Admin/User";
import { deleteUser, getAllUsers } from "../redux/users/action";
import { DELETE_USER_RESET } from "../redux/users/actionTypes";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { isLoading, users, error } = useSelector((state) => state.allUsers);
  console.log(users);

  // useEffect(() => {}, [dispatch]);

  const {
    error: deleteError,
    isLoading: loading,
    isDeleted,
    message,
  } = useSelector((state) => state.user);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (isDeleted) {
      alert(message);
    }
    if (deleteError) {
      alert("Something Went Wrong.");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
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
              <User
                key={item._id}
                item={item}
                loading={loading}
                handleDeleteUser={handleDeleteUser}
              />
            ))}
        </tbody>
      </table>
      {/* </Flex> */}
    </Box>
  );
};

export default AllUsers;
