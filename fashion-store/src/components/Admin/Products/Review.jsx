import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiEdit, BiLinkExternal, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../redux/products/action";
import { DELETE_PRODUCT_RESET } from "../../../redux/products/actionTypes";

const Review = ({ item, loading: isLoading, deleteReviewHandler }) => {
  console.log(item);
  return (
    <tr>
      <td data-label="ReviewID">{item?._id}</td>
      <td data-label="User">{item?.name}</td>
      <td data-label="Comment">{item?.comment}</td>
      <td data-label="Rating">{item?.rating}</td>

      <td data-label="Delete" onClick={() => deleteReviewHandler(item._id)}>
        <Flex justify="center" align="center" cursor="pointer">
          <Button variant="link" pointerEvents={isLoading && "none"}>
            <BiTrash fontSize={"20px"} color="red" />
          </Button>
        </Flex>
      </td>
    </tr>
  );
};

export default Review;
