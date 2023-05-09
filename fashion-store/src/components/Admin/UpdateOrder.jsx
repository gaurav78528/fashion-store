import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails, updateOrder } from "../../redux/orders/action";
import { UPDATE_ORDER_RESET } from "../../redux/orders/actionTypes";
import { Text } from "@chakra-ui/react";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

const UpdateOrder = () => {
  const { order, error, isLoading } = useSelector(
    (state) => state.orderDetails
  );

  console.log(order);
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  // const myForm = new FormData();

  // myForm.set("status", "heloo");
  // console.log(myForm);
  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateOrder(id, {status}));
  };

  const dispatch = useDispatch();
  // const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert(error);
    }
    if (updateError) {
      alert(updateError);
    }
    if (isUpdated) {
      alert("Order Updated Successfully");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, error, id, isUpdated, updateError]);

  return (
    <Fragment>
      {/* <MetaData title="Process Order" /> */}
      <div className="dashboard">
        {/* <SideBar /> */}
        <div className="newProductContainer">
          {isLoading ? (
            "loading....."
          ) : (
            <div
              className="confirmOrderPage"
              // style={{
              //   display: order.orderStatus === "Delivered" ? "block" : "grid",
              // }}
            >
              <div>
                <div className="confirmshippingArea">
                  <h4>Shipping Info</h4>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Name:</p>
                      <span>{order.user && order.user.email}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.phone}
                      </span>
                    </div>
                    <div>
                      <p>Address:</p>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pincode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                  </div>

                  <h4>Payment</h4>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <Text
                        className={
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                        color={
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "green"
                            : "red"
                        }
                      >
                        {order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "PAID"
                          : "NOT PAID"}
                      </Text>
                    </div>

                    <div>
                      <p>Amount:</p>
                      <span>{order.totalPrice && order.totalPrice}</span>
                    </div>
                  </div>

                  <h4>Order Status</h4>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <Text
                        color={
                          order.orderStatus && order.orderStatus === "Delivered"
                            ? "green"
                            : "red"
                        }
                      >
                        {order.orderStatus && order.orderStatus}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <h4>Your Cart Items:</h4>
                  <div className="confirmCartItemsContainer">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.img} alt="Product" />
                          <Link to={`/store/${item.product}`}>
                            {item.title}
                          </Link>
                          <span>
                            {item.quantity} X ₹{item.price} ={" "}
                            <b>₹{item.price * item.quantity}</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              <div
                style={{
                  display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    {/* <AccountTreeIcon /> */}
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </select>
                  </div>

                  <button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      isLoading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateOrder;
