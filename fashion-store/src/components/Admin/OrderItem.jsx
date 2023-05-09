import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiEdit, BiLinkExternal, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { deleteProduct } from "../../redux/products/action";
// import { DELETE_PRODUCT_RESET } from "../../redux/products/actionTypes";

const OrderItem = ({ item, loading: isLoading, handleDeleteOrder }) => {
  return (
    <tr>
      <td data-label="OrderID">{item?._id}</td>
      <td
        data-label="Status"
        className={
          item.orderStatus === "Processing"
            ? "orderProcessing"
            : "orderDelivered"
        }
      >
        {item?.orderStatus}
      </td>
      <td data-label="Qty">{item?.orderItems.length}</td>
      <td data-label="Amount">{item?.totalPrice}</td>
      <td data-label="Update">
        <Link to={`/admin/orders/update/${item._id} `}>
          <Flex justify="center" align="center">
            <BiEdit fontSize={"20px"} />
          </Flex>
        </Link>
      </td>
      <td data-label="Delete" onClick={() => handleDeleteOrder(item._id)}>
        <Flex justify="center" align="center" cursor="pointer">
          <Button variant="link" pointerEvents={isLoading && "none"}>
            <BiTrash fontSize={"20px"} color="red" />
          </Button>
        </Flex>
      </td>
    </tr>
  );
};

export default OrderItem;
