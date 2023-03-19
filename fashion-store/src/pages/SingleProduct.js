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
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import Wishlist from "./Wishlist";
import ShippingAddress from "./../components/Checkout/ShippingAddress";
import ReactStars from "react-rating-stars-component";

// function fetchSingleProduct() {
//   return fetch("http://localhost:8080/products");
// }

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { colors, brand, title, mrp, offer, category, subCategory, rating } =
    data;

  const imageRef = useRef();
  const btnRef = useRef();

  console.log(data);
  console.log(colors);
  const { id } = useParams();
  // let img = colors[0].images[0];

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
    return <h1>loading...</h1>;
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
            // src={colors?.[0]?.images?.[0]}
            src={imageRef.current || colors?.[0]?.images?.[0]}
            // fit="contain"
            objectFit="fill"
            align={"center"}
            w={"100%"}
            // h={{ base: "100%", sm: "400px", lg: "500px" }}
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
        <Stack spacing={{ base: 6, md: 10 }}>
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
              {/* <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text> */}
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                value={rating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
            </Box>
            {/* <Box>
           <Text
             fontSize={{ base: "16px", lg: "18px" }}
             color={useColorModeValue("yellow.500", "yellow.300")}
             fontWeight={"500"}
             textTransform={"uppercase"}
             mb={"4"}
           >
             Features
           </Text>

           <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
             <List spacing={2}>
               <ListItem>Chronograph</ListItem>
               <ListItem>Master Chronometer Certified</ListItem>{" "}
               <ListItem>Tachymeter</ListItem>
             </List>
             <List spacing={2}>
               <ListItem>Anti‑magnetic</ListItem>
               <ListItem>Chronometer</ListItem>
               <ListItem>Small seconds</ListItem>
             </List>
           </SimpleGrid>
         </Box>
         <Box>
           <Text
             fontSize={{ base: "16px", lg: "18px" }}
             color={useColorModeValue("yellow.500", "yellow.300")}
             fontWeight={"500"}
             textTransform={"uppercase"}
             mb={"4"}
           >
             Product Details
           </Text>

           <List spacing={2}>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Between lugs:
               </Text>{" "}
               20 mm
             </ListItem>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Bracelet:
               </Text>{" "}
               leather strap
             </ListItem>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Case:
               </Text>{" "}
               Steel
             </ListItem>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Case diameter:
               </Text>{" "}
               42 mm
             </ListItem>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Dial color:
               </Text>{" "}
               Black
             </ListItem>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Crystal:
               </Text>{" "}
               Domed, scratch‑resistant sapphire crystal with anti‑reflective
               treatment inside
             </ListItem>
             <ListItem>
               <Text as={"span"} fontWeight={"bold"}>
                 Water resistance:
               </Text>{" "}
               5 bar (50 metres / 167 feet){" "}
             </ListItem>
           </List>
         </Box> */}
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
