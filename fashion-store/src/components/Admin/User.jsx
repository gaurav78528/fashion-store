import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiEdit, BiLinkExternal, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/products/action";
import { DELETE_PRODUCT_RESET } from "../../redux/products/actionTypes";

const User = ({ item, loading: isLoading, handleDeleteUser }) => {
  return (
    <tr>
      <td data-label="UserID">{item?._id}</td>
      <td data-label="Email">{item?.email}</td>
      <td data-label="Name">{item?.firstName}</td>
      <td data-label="Role">{item?.role}</td>
      <td data-label="Update">
        <Link to={`/admin/users/update/${item._id} `}>
          <Flex justify="center" align="center">
            <BiEdit fontSize={"20px"} />
          </Flex>
        </Link>
      </td>
      <td
        data-label="Delete"
          onClick={() => handleDeleteUser(item._id)}
      >
        <Flex justify="center" align="center" cursor="pointer">
          <Button variant="link" pointerEvents={isLoading && "none"}>
            <BiTrash fontSize={"20px"} color="red" />
          </Button>
        </Flex>
      </td>
    </tr>
  );
};

export default User;
