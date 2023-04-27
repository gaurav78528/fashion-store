import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/cart/action";
import { toastProps } from "./../constants/constants";
import "../styles/specialProductCard.css";

const SpecialProductCard = ({ item }) => {
  const { _id: id, brand, title, offer, mrp, stock, rating, colors } = item;

  // console.log(productData);
  const toast = useToast();
  const btnRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(addItemToCart(id, 1, colors?.[0]?.images?.[0]));
    toast({
      ...toastProps,
      title: "Success",
      description: "Item Added To Cart",
      status: "success",
    });
    btnRef.current.disabled = true;
  };
  return (
    <Box className="special-product-card">
      <Flex justify="space-between" gap="20px">
        <Box w="50%">
          <Image
            src={colors?.[0]?.images?.[0]}
            alt="img"
            // h="50%"
            maxW="150px"
            minW="150px"
          />
        </Box>
        <Flex direction="column" gap="10px" className="special-product-details">
          <Heading as="h6" size="xs" fontWeight={500} color="#ed5b5b">
            {brand}
          </Heading>
          <Text fontWeight="bold">{title}</Text>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={rating}
            edit={false}
            size={15}
            activeColor="#ffd700"
          />
          <Text>
            <span style={{ color: "red" }}>
              Rs.{Math.round(mrp - (mrp * offer) / 100)}
            </span>
            &nbsp;
            <strike style={{ color: "grey" }}>Rs.{mrp}</strike>
          </Text>

          <Box>
            <Text color="gray">Products: {stock}</Text>
            <Progress
              colorScheme="green"
              borderRadius="5px"
              size="sm"
              value={1}
            />
          </Box>
          <Button
            colorScheme="blackAlpha"
            fontWeight="400"
            borderRadius="5px"
            size="sm"
            // w="35%"
            ref={btnRef}
            transition="0.5s"
            bgColor="black"
            my="10px"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SpecialProductCard;
