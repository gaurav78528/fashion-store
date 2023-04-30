import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myOrders } from "../redux/orders/action";
import "../styles/order.css";
import OrderItem from "../components/OrderItem";

const MyOrders = () => {
  const { isLoading, orders } = useSelector((state) => state.myOrders);
  console.log(orders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myOrders());
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Buyer</th>
          <th>Date</th>
          <th>Payment</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {orders &&
          orders?.map((item) => <OrderItem key={item._id} item={item} />)}
      </tbody>
    </table>
  );
};

export default MyOrders;
