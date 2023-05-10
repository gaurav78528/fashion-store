import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getAllOrders } from "../redux/orders/action";
import ProductItem from "../components/Admin/ProductItem";
import OrderItem from "../components/Admin/OrderItem";
import { DELETE_ORDER_RESET } from "../redux/orders/actionTypes";
const AllOrders = () => {
  const dispatch = useDispatch();
  const { isLoading, orders } = useSelector((state) => state.allOrders);

  const {
    error,
    isLoading: loading,
    isDeleted,
  } = useSelector((state) => state.order);

  const handleDeleteOrder = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    // if (error) {
    //   alert(error);
    //   // console.log(error);
    // }
    if (isDeleted) {
      alert("Order Deleted Successfully.");
    }
    dispatch({ type: DELETE_ORDER_RESET });
    dispatch(getAllOrders());
  }, [error, dispatch, isDeleted]);
  return (
    <Box>
      <Heading w="100%" textAlign={"center"} fontWeight={600} my="20px">
        All Orders
      </Heading>

      <table className="table">
        <thead>
          <tr>
            <th>OrderID</th>
            <th>Status</th>
            <th>Qty</th>
            <th>Amount</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading
            ? orders?.map((item) => (
                <OrderItem
                  key={item._id}
                  item={item}
                  loading={loading}
                  handleDeleteOrder={handleDeleteOrder}
                />
              ))
            : "loading....."}
        </tbody>
      </table>
    </Box>
  );
};

export default AllOrders;
