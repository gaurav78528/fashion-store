import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../redux/cart/action";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <>
      {cartItems.length !== 0 ? (
        <Box bgColor="#f5f5f7">
          <Stack
            w={{ base: "100vw", sm: "100vw", md: "100vw", lg: "80vw" }}
            // border={"2px solid red"}
            margin="auto"
            py="20px"
            bgColor="#fff"
          >
            <Heading as={"h1"} size={"xl"} textAlign="center" my="20px">
              Your Cart: {cartItems.length}{" "}
              {cartItems.length > 1 ? "Items" : "Item"}
            </Heading>
            <Stack
              gap="20px"
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Box
                w={{ base: "100%", sm: "100%", md: "100%", lg: "48%" }}
                // border={"1px solid red"}
                height="500px"
                overflow={"scroll"}
                overflowX={"hidden"}
                p="20px"
              >
                {/* card  item  */}
                {cartItems &&
                  cartItems.map((cartItem) => (
                    <CartItem key={cartItem._id} cartItem={cartItem} />
                  ))}
              </Box>
              {/* order details */}
              <Box
                w={{ base: "100%", sm: "100%", md: "100%", lg: "48%" }}
                p="20px"
              >
                <OrderSummary cartItems={cartItems} />
              </Box>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
