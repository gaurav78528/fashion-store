import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import { BiGitCompare } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "../styles/productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  productData: {
    _id,
    colors,
    brand,
    title,
    mrp,
    offer,
    category,
    subCategory,
    new: newer,
    rating,
  },
}) => {
  console.log(colors);
  // const image =
  //   "https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Makeup/SBC-Makeup_02._SY530_QL85_.jpg";
  // const name = "helllo wolrd";
  // const price = 23;
  return (
    <Box className="product-card" bgColor="#fff" borderRadius="5px" w="250px">
      <HStack justify="space-between" p="5px" align={"center"}>
        {newer ? (
          <Tag size="sm" key="sm" variant="solid" colorScheme="green">
            New
          </Tag>
        ) : (
          <Tag size="sm" key="sm" variant="ghost" colorScheme="green"></Tag>
        )}

        <Button variant="link">
          <AiOutlineHeart />
        </Button>
      </HStack>
      <Flex direction="column" p="10px" gap="7px">
        <Box className="product-details" position={"relative"}>
          <Box className="product-image">
            <Image
              src={colors?.[0]?.images?.[0]}
              alt={title}
              minH="250px"
              w="100%"
            />
            <Image
              src={colors?.[0]?.images?.[1]}
              alt="product_img"
              minH="250px"
              w="100%"
            />
          </Box>
          <Link to={`/store/${_id}`}>
            <Text
              border={"1px solid gray"}
              position={"absolute"}
              bottom="-10px"
              left={"50%"}
              px="20px"
              fontWeight={500}
              color="#fff"
              background={"rgba(0,0,0,0.5)"}
              transform={"translate(-50%)"}
              borderRadius={"3px"}
              className="view-btn"
            >
              VIEW
            </Text>
          </Link>
        </Box>
        <Heading color="#ed5b5b" as="h6" size="xs" mt="15px">
          {brand}
        </Heading>
        <Heading as="h6" size="xs">
          {title.length > 25 ? `${title.slice(0, 25)}....` : title}
        </Heading>
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          value={rating}
          edit={false}
          size={24}
          activeColor="#ffd700"
        />
        <Text>${mrp}</Text>
      </Flex>
      <Flex
        className="product-side-bar"
        direction="column"
        gap="15px"
        align="center"
        justify="center"
      >
        <Button variant="link">
          <BiGitCompare fontSize="20px" />
        </Button>
        <Button variant="link">
          <AiOutlineEye fontSize="20px" />
        </Button>
        <Button variant="link">
          <HiOutlineShoppingBag fontSize="20px" />
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
