import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails, updateOrder } from "../../redux/orders/action";
import { UPDATE_ORDER_RESET } from "../../redux/orders/actionTypes";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const UpdateOrder = () => {
  const { order, error, isLoading } = useSelector(
    (state) => state.orderDetails
  );

  // console.log(order);
  const [status, setStatus] = useState("");
  const { id } = useParams();
  const { error: updateError, isUpdated } = useSelector((state) => state.order);

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateOrder(id, { status }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (updateError) {
      toast.error(updateError);
    }
    if (isUpdated) {
      toast.success(`Order ${status}`);
    }
    dispatch({ type: UPDATE_ORDER_RESET });

    dispatch(getOrderDetails(id));
  }, [dispatch, error, id, isUpdated, status, updateError]);

  return (
    <Fragment>
      {/* <MetaData title="Process Order" /> */}

      {/* <SideBar /> */}
      <Box bgColor="#f5f5f7">
        <Stack
          margin="auto"
          py="20px"
          bgColor="#fff"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "80vw" }}
          p={{
            base: "15px",
            sm: "20px",
            md: "35px",
            lg: "40px",
          }}
        >
          {isLoading ? (
            "loading....."
          ) : (
            <>
              <Flex
                // p={{
                //   base: "15px",
                //   sm: "20px",
                //   md: "35px",
                //   lg: "40px",
                // }}
                direction={{
                  base: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                gap="20px"
                justifyContent="space-between"
              >
                <Stack
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "40%",
                    lg: "50%",
                  }}
                >
                  {/* Shipping Info */}
                  <Box>
                    <Heading w="100%" fontWeight={600} size="lg" my="20px">
                      Shipping Info
                    </Heading>
                    <Stack gap="5px" p="5px">
                      <Box>
                        <b>Name: </b>
                        <span>{order.user && order.user.email}</span>
                      </Box>
                      <Box>
                        <b>Phone: </b>
                        <span>
                          {order.shippingInfo && order.shippingInfo.phone}
                        </span>
                      </Box>
                      <Box>
                        <b>Address: </b>
                        <span>
                          {order.shippingInfo &&
                            `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pincode}, ${order.shippingInfo.country}`}
                        </span>
                      </Box>
                    </Stack>
                  </Box>
                  {/* PAYMENT STATUS */}
                  <Box>
                    <Heading w="100%" fontWeight={600} size="lg" my="20px">
                      Payment
                    </Heading>

                    <Stack gap="2px">
                      <div>
                        <b>Status: </b>
                        <Text
                          className={
                            order.paymentInfo &&
                            order.paymentInfo.status === "succeeded"
                              ? "greenColor"
                              : "redColor"
                          }
                          fontWeight={500}
                          display="inline"
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
                        <b>Amount: </b>
                        <Text
                          display="inline"
                          fontWeight={500}
                          color={
                            order.paymentInfo &&
                            order.paymentInfo.status === "succeeded"
                              ? "green"
                              : "red"
                          }
                        >
                          {order.totalPrice && order.totalPrice}
                        </Text>
                      </div>
                    </Stack>
                  </Box>

                  {/* Order Status */}
                  <Box>
                    <Heading w="100%" fontWeight={600} size="lg" my="20px">
                      Order Status
                    </Heading>

                    <div>
                      <Text
                        fontWeight={500}
                        color={
                          order.orderStatus && order.orderStatus === "Delivered"
                            ? "green"
                            : "red"
                        }
                      >
                        {order.orderStatus && order.orderStatus}
                      </Text>
                    </div>
                  </Box>
                </Stack>
                {/* CART ITEMS */}
                <Box
                  w={{
                    base: "100%",
                    sm: "100%",
                    md: "60%",
                    lg: "50%",
                  }}
                >
                  <Heading w="100%" fontWeight={600} size="lg" my="20px">
                    Your Cart Items:
                  </Heading>

                  <Box maxH="450px" overflow={"auto"}>
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <Flex
                          key={item.product}
                          gap="20px"
                          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                          alignItems="center"
                          mt="10px"
                          borderTopRightRadius="5px"
                          borderBottomRightRadius="5px"
                        >
                          <Image
                            src={item.img}
                            alt={item.title}
                            h={120}
                            w={100}
                            borderTopLeftRadius="5px"
                            borderBottomLeftRadius="5px"
                          />
                          <Flex
                            // justifyContent="space-between"
                            alignItems={{
                              base: "start",
                              sm: "start",
                              md: "center",
                              lg: "center",
                            }}
                            gap="20px"
                            direction={{
                              base: "column",
                              sm: "column",
                              md: "row",
                              lg: "row",
                            }}
                          >
                            <Link to={`/store/${item.product}`}>
                              {item.title}
                            </Link>
                            <Text>
                              {item.quantity} X ₹{item.price} ={" "}
                              <b>₹{item.price * item.quantity}</b>
                            </Text>
                          </Flex>
                        </Flex>
                      ))}
                  </Box>
                </Box>
              </Flex>
              {/*  */}
              <div
                style={{
                  display: order.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form onSubmit={updateOrderSubmitHandler}>
                  {/* <h1>Process Order</h1> */}

                  <Heading w="100%" fontWeight={600} size="lg" my="20px">
                    Process Order
                  </Heading>

                  <Box>
                    {/* <AccountTreeIcon /> */}
                    <Select
                      variant="filled"
                      size="md"
                      onChange={(e) => setStatus(e.target.value)}
                      w={{
                        base: "100%",
                        sm: "200px",
                        md: "250px",
                        lg: "300px",
                      }}
                      my="20px"
                    >
                      <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )}
                    </Select>
                    {/* <select onChange={(e) => setStatus(e.target.value)}> */}
                    {/* <option value="">Choose Category</option>
                      {order.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )}

                      {order.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )} */}
                    {/* </select> */}
                  </Box>
                  <Button
                    colorScheme="#000"
                    bgColor="#000"
                    _hover={{ bgColor: "#e3ae52", color: "#000" }}
                    type="submit"
                    w={{
                      base: "100%",
                      sm: "200px",
                      md: "250px",
                      lg: "300px",
                    }}
                    disabled={
                      isLoading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </>
          )}
        </Stack>
      </Box>
    </Fragment>
  );
};

export default UpdateOrder;
