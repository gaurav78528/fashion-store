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

const ProductCard = () => {
  return (
    <Link to="/">
      <Box
        className="product-card"
        // border="1px solid red"
        bgColor="#fff"
        borderRadius="5px"

        // _hover={{}}
      >
        <HStack justify="space-between" p="5px" align={"center"}>
          <Tag size="sm" key="sm" variant="solid" colorScheme="orange">
            Tag
          </Tag>
          <Button variant="link">
            <AiOutlineHeart />
          </Button>
        </HStack>
        <Flex direction="column" p="10px" gap="7px">
          {/* <Flex> */}
          <Box className="product-details">
            <Box className="product-image">
              <Image
                src="https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Makeup/SBC-Makeup_01._SY530_QL85_.jpg"
                alt="product_img"
                // h="200px"
              />
              <Image
                src="https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Makeup/SBC-Makeup_02._SY530_QL85_.jpg"
                alt="product_img"
                // h="200px"
              />
            </Box>
          </Box>
          <Heading color="#ed5b5b" as="h6" size="xs">
            Havells
          </Heading>
          <Heading as="h6" size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            animi.
          </Heading>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <Text>$10.00</Text>
          {/* </Flex> */}
        </Flex>
        <Flex
          className="product-side-bar"
          direction="column"
          gap="15px"
          align="center"
          justify="center"

          // h="100%"
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
    </Link>
  );
};

export default ProductCard;
