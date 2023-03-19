import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  transition,
  Divider,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import Wishlist from "./Wishlist";
import ShippingAddress from "./../components/Checkout/ShippingAddress";
import ReactStars from "react-rating-stars-component";
import { AiOutlineTag } from "react-icons/ai";
import { BiPurchaseTag } from "react-icons/bi";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { colors, brand, title, mrp, offer, rating } = data;

  const imageRef = useRef();
  const btnRef = useRef();

  // console.log(data);
  // console.log(colors);
  const { id } = useParams();

  const getSingleProduct = async (id) => {
    try {
      setLoading(true);
      let res = await fetch(`http://localhost:4500/products/${id}`);
      let productData = await res.json();
      console.log(productData);
      setData(productData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  const showImage = (image) => {
    imageRef.current.setAttribute("src", image);
    btnRef.current.style.border = "2px solid green";
    // console.log(imageRef.current);
  };

  if (loading) {
    return (
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
          px=""
        >
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Box w="100%" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
          <Image
            rounded={"md"}
            ref={imageRef}
            alt={title}
            src={imageRef.current || colors?.[0]?.images?.[0]}
            // fit="contain"
            objectFit="fill"
            align={"center"}
            w={"100%"}
            h="auto"
            mt="20px"
          />
          <Flex
            justify={"start"}
            align={"center"}
            gap={{ base: "5px", sm: "10px", md: "10px", lg: "10px" }}
            w={{ base: "100%", sm: "60%", md: "45%", lg: "45%" }}
            // flexWrap="wrap"
            m="20px auto"
            border="1px solid gray"
          >
            {colors?.[0]?.images.map((image, id) => {
              return (
                <Image
                  key={id}
                  alt={title}
                  src={image}
                  fit="contain"
                  align={"center"}
                  w={"100%"}
                  h="100px"
                  _active={{
                    border: "2px solid red",
                  }}
                  ref={btnRef}
                  onClick={() => showImage(image)}
                  cursor={"pointer"}
                />
              );
            })}
          </Flex>
        </Box>
        <Stack
          spacing={{ base: 6, md: 10 }}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          p={{
            base: "20px 5px",
            sm: "20px 40px",
            md: "20px 40px",
            lg: "20px 40px",
          }}
        >
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {brand}
            </Heading>
            <Flex
              align={{
                base: "start",
                sm: "start",
                md: "start",
                lg: "center",
              }}
              flexDirection={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "row",
              }}
              gap="20px"
              my="10px"
            >
              <Text
                color={"crimson"}
                fontWeight={400}
                fontSize={"xl"}
                textDecoration="line-through"
              >
                MRP: {mrp}
              </Text>
              <Text fontWeight={600} fontSize={"lg"}>
                Price: {mrp - (mrp * offer) / 100}
              </Text>
            </Flex>
            <Text color={"#e3c810"} fontWeight={600} fontSize={"xl"}>
              OFFER: {offer}%
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={"gray"} />}
          >
            <Box spacing={{ base: 4, sm: 6 }} justify="start">
              <Text color={"gray"} fontSize={"2xl"} fontWeight={"300"}>
                {title}
              </Text>

              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={rating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <Heading as="h4" size={"sm"}>
                Select Size
              </Heading>
              <Flex
                align={"center"}
                gap={{ base: "5px", sm: "10px", md: "10px", lg: "10px" }}
                my="20px"
              >
                {colors?.[0]?.sizes.map((size) => {
                  return (
                    <Text
                      h="50px"
                      // p="10px 15px"
                      w="50px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="50%"
                      textAlign="center"
                      background="rgba(0,0,0,0.3)"
                      fontWeight={600}
                      transition="all 0.4s"
                      cursor={"pointer"}
                      _hover={{
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        background: "#000",
                        color: "#fff",
                      }}
                    >
                      {size}
                    </Text>
                  );
                })}
              </Flex>
              <Divider />
              <Box my="50px">
                <Text color="gray.700" mt="5px" fontSize={"15px"}>
                  100% Original Products
                </Text>
                <Text color="gray.700" mt="5px" fontSize={"15px"}>
                  Pay on delivery might be available
                </Text>
                <Text color="gray.700" mt="5px" fontSize={"15px"}>
                  100% Original Products Easy 14 days returns and exchanges
                </Text>
                <Text color="gray.700" mt="5px" fontSize={"15px"}>
                  Try & Buy might be available
                </Text>

                <Flex align={"center"} gap="10px">
                  <Heading as="h2" size="sm" my="15px">
                    Best Offers
                  </Heading>
                  <BiPurchaseTag fontSize={"20px"} />
                </Flex>
                <Text fontWeight={500}>
                  Best Price: {"   "}
                  <span style={{ color: "tomato" }}>
                    Rs. {mrp - (mrp * offer) / 100}
                  </span>
                </Text>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    margin: "20px 0",
                  }}
                >
                  <li>
                    Applicable on: Orders above Rs. 2999 (only on first
                    purchase)
                  </li>
                  <li>
                    Coupon code:{" "}
                    <span style={{ fontWeight: 700 }}>FASHIONFIRST200</span>{" "}
                  </li>
                  <li>
                    Coupon Discount: Rs. 45 off (check cart for final savings)
                  </li>
                </ul>
              </Box>
            </Box>
          </Stack>

          <Flex align={"center"} gap={"20px"}>
            <Button
              size="lg"
              bg="#e3ae52"
              color="#000"
              _hover={{
                bg: "#000",
                color: "white",
              }}
              fontSize={{ base: "14px", sm: "16px", md: "17px", lg: "17px" }}
            >
              Add to Wishlist
            </Button>
            <Button
              size="lg"
              bg={"#000"}
              color={"white"}
              _hover={{
                bg: "#e3ae52",
                color: "#000",
              }}
              fontSize={{ base: "14px", sm: "16px", md: "17px", lg: "17px" }}
            >
              Add to cart
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
export default SingleProduct;
