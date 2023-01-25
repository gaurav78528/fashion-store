import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaRegCreditCard, FaShippingFast } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import apple from "../../src/images/apple.png";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";
import SpecialProductCard from "../components/SpecialProductCard";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <>
      <Grid
        // h="auto"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        py="40px"
        px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
        // h="500px"
      >
        <GridItem
          rowSpan={2}
          colSpan={{ base: "4", sm: "4", md: "4", lg: "2" }}
        >
          
          {/* <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Desktop-Banner_Without-Super-Value_1.jpg"
            alt="img"
            borderRadius="5px"
            h="100%"
            w="100%"
            // h="auto"
          /> */}
          <Carousel />
        </GridItem>
        <GridItem
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/Jupiter/COOP/Celebrity-RT-Creative-Asset-Big-Basket-1400-X-800.jpg"
            alt="img"
            borderRadius="5px"
            h="100%"
            // border="1px solid red"
          />
        </GridItem>
        <GridItem
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/May/Sub-category_Skincare_Visibiity_750x375.jpg"
            alt="img"
            borderRadius="5px"
            h="100%"
            // border="1px solid red"
          />
        </GridItem>
        <GridItem
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/AMZBESSC0520567_1_N_750X375_40820a01-4b4c-4b15-b2e7-6b6884f65545.jpg"
            alt="img"
            borderRadius="5px"
            h="100%"
          />
        </GridItem>
        <GridItem
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/Jupiter/COOP/Wedding-Banner.jpg"
            alt="img"
            borderRadius="5px"
            h="100%"
          />
        </GridItem>
      </Grid>
      <Box
        px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
        bgColor="#f5f5f7"
      >
        <HStack
          className="customer-services"
          py="40px"
          // gap="10px"
          w={{ base: "99%", sm: "99%", md: "95%", lg: "70%" }}
          m="auto"
          overflowX="auto"
        >
          <Flex
            minW="200px"
            gap="15px"
            align={"center"}
            justify={"center"}
            // m="auto"
            // border="1px solid red"
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <FaShippingFast fontSize={"25px"} />
            <Box>
              <Heading as="h6" size="xs">
                Free Shipping
              </Heading>
              <Text color="gray" fontSize={"13px"}>
                From all orders over $100
              </Text>
            </Box>
          </Flex>
          <Flex
            gap="15px"
            minW="200px"
            align={"center"}
            justify={"center"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <AiOutlineGift fontSize={"25px"} />
            <Box>
              <Heading as="h6" size="xs">
                Daily Surprise Offers
              </Heading>
              <Text color="gray" fontSize={"13px"}>
                Save up to 25% off
              </Text>
            </Box>
          </Flex>
          <Flex
            gap="15px"
            minW="200px"
            align={"center"}
            justify={"center"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <BiSupport fontSize={"25px"} />
            <Box>
              <Heading as="h6" size="xs">
                Support 24/7
              </Heading>
              <Text color="gray" fontSize={"13px"}>
                Shop with an expert
              </Text>
            </Box>
          </Flex>
          <Flex
            gap="15px"
            minW="200px"
            align={"center"}
            justify={"center"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <TbDiscount2 fontSize={"25px"} />
            <Box>
              <Heading as="h6" size="xs">
                Affordable Prices
              </Heading>
              <Text color="gray" fontSize={"13px"}>
                Get Factory direct price
              </Text>
            </Box>
          </Flex>
          <Flex
            minW="200px"
            gap="15px"
            align={"center"}
            justify={"center"}
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
          >
            <FaRegCreditCard fontSize={"25px"} />
            <Box>
              <Heading as="h6" size="xs">
                Secure Payments
              </Heading>
              <Text color="gray" fontSize={"13px"}>
                100% Protected Payments
              </Text>
            </Box>
          </Flex>
        </HStack>
        <Grid
          borderRadius="5px"
          // templateRows="repeat(2, 1fr)"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          // display={{ base: "none", sm: "none", md: "block", lg: "block" }}
          gap="1px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        >
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              justify={"center"}
              align={"center"}
              gap="20px"
              py="30px"
              bgColor="#fff"
            >
              <Box>
                <Heading as="h6" size="xs">
                  Music & Gaming
                </Heading>
                <Text>10 Items</Text>
              </Box>
              <Image
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/Police_750-x-375.jpg"
                alt="img"
                w="30%"
                // h="50%"
              />
            </Flex>
          </GridItem>
        </Grid>
        {/* <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
          <Marquee>
            <Flex justify="center" align="center">
              <Image
                w="50%"
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%2235.433%2035.353%201062.992%20155.711%22%3E%3Cpath%20fill%3D%22%23005e9d%22%20d%3D%22M1098.426%20166.63v19.137h-3.21v-14.748h-.203l-5.322%2014.748h-2.763l-5.282-14.748v14.748h-3.251V166.63h4.836l5.322%2014.992%205.037-14.992h4.836M1076.324%20166.63v2.762h-6.217v16.373h-3.21v-16.373h-6.214v-2.762h15.641M995.96%20138.067c4.833-15.643%204.833-24.865.203-30.879-3.455-4.144-8.493-6.216-16.13-6.216-17.023%200-26.45%209.67-34.049%2033.884-4.875%2015.886-4.875%2025.108-.244%2031.083%203.21%203.94%208.531%206.013%2016.13%206.013%2016.78%200%2026.49-9.466%2034.09-33.885zm66.55-35.023c6.662%208.33%208.085%2018.894%204.144%2031.814-11.051%2035.713-52.737%2056.19-114.495%2056.19-36.85%200-61.918-7.15-73.011-20.965-6.663-8.287-7.801-19.096-3.9-32.016%2011.05-35.713%2052.736-56.19%20114.493-56.19%2036.608%200%2061.961%207.354%2072.768%2021.167M832.18%2085.329h65.413c-3.94%205.283-75.083%20100.884-76.26%20102.51H720.936c-.487-3.007-12.472-98.812-12.92-102.51h61.515c.445%203.007%208.978%2071.875%208.978%2071.875s52.736-70.493%2053.671-71.875M629.235%20138.067c4.835-15.643%205.08-24.865.243-30.879-3.25-4.144-8.53-6.216-15.886-6.216-17.063%200-26.733%209.67-34.089%2033.884-5.078%2015.886-5.078%2025.108-.244%2031.083%203.21%203.94%208.533%206.013%2015.886%206.013%2017.066%200%2026.736-9.466%2034.09-33.885zm66.795-35.023c6.703%208.33%208.086%2018.894%203.941%2031.814-11.05%2035.713-52.777%2056.19-114.25%2056.19-36.851%200-61.96-7.15-73.052-20.965-6.663-8.287-8.044-19.096-4.143-32.016%2011.295-35.713%2052.98-56.19%20114.493-56.19%2036.85%200%2061.96%207.354%2073.011%2021.167M503.486%2098.008c2.519%203.21%203.901%206.418%203.21%2011.05l-25.556%2078.985h-67.729l23.973-73.701c.893-3.21-.244-5.973-2.073-8.045-3.251-3.941-10.157-6.46-33.884-4.836%200%200-28.074%2085.445-28.563%2086.582h-67.69c.652-1.829%2031.773-96.942%2032.22-97.877%2023.526-4.144%2054.606-8.045%2086.866-8.045%2043.756.001%2070.45%205.283%2079.226%2015.887M256.337%20119.664c1.382-6.46-.69-11.295-3.008-14.058-2.518-3.25-8.085-7.395-19.582-7.395-16.333%200-28.563%207.842-32.708%2020.965l-8.045%2030.188%2063.343-29.7zm56.881-.245c0%204.835-1.137%208.98-2.072%2010.808-2.072.488-120.222%2026.735-120.222%2026.735s-1.18%205.77%203.209%208.775c5.77%204.145%2011.986%205.283%2022.55%205.73%2026.044%201.138%2061.308-14.058%2071.184-18.406-1.585%205.038-11.743%2027.182-12.19%2028.319-4.389%201.625-28.807%209.426-76.71%209.67-18.203.244-50.665-2.072-64.032-18.893-6.663-8.287-7.84-20.03-3.25-34.778%2010.848-35.227%2051.397-55.5%20110.797-55.5%2033.195%200%2054.85%206.216%2064.764%2018.405%203.9%205.078%205.972%2011.538%205.972%2019.135M82.645%2035.355h67.04c-1.381%204.348-46.52%20149.924-47.252%20152.484H35.435c1.38-4.388%2046.519-149.964%2047.21-152.484%22%2F%3E%3C%2Fsvg%3E"
              />
              <Image
                w="50%"
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20270.365%20427.85%22%3E%3Cpath%20fill%3D%22%23787f87%22%20d%3D%22M33.755%20309.033h34.259v86.922h50.893v29.012H33.755V309.033M207.615%20413.416c-6.072%209.215-17.282%2014.434-31.276%2014.434-30.116%200-49.742-24-49.742-61.052%200-37.591%2022.061-60.755%2058.616-60.755%2014.57%200%2027.021%203.906%2036.648%2011.254%209.709%207.697%2013.312%2015.261%2014.874%2030.549h-35.821c-.979-8.946-7.67-14.668-16.473-14.668-13.853%200-21.953%2012.8-21.953%2034.088%200%2021.594%208.416%2034.556%2022.563%2034.556%2011.138%200%2017.587-6.189%2020.236-20.049h-22.104v-24.404h53.552v67.6h-29.12v-11.553%22%2F%3E%3Cpath%20fill%3D%22%23922c60%22%20d%3D%22M135.094%20270.419c74.73%200%20135.271-60.495%20135.271-135.209S209.824%200%20135.094%200C60.531%200%200%2060.496%200%20135.209c0%2074.715%2060.531%20135.21%20135.094%20135.21%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M129.793%2075.873v118.529h37.689v-10.59H140.59V75.873h-10.797M91.996%20108.209c8.946%200%2016.24-7.249%2016.24-16.159%200-8.991-7.293-16.24-16.24-16.24-8.9%200-16.194%207.249-16.194%2016.24%200%208.91%207.293%2016.159%2016.194%2016.159%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M140.59%2022.051c-1.409-.054-4.132-.072-5.496-.072-62.319%200-113.068%2050.759-113.068%20113.194%200%2030.252%2011.785%2058.654%2033.145%2080.049%2021.343%2021.396%2049.788%2033.137%2079.925%2033.137%2030.322%200%2058.762-11.739%2080.12-33.137%2021.352-21.395%2033.137-49.806%2033.137-80.049v-5.138l-4.446.018h-76.349v10.473h70.033c-.009.243-.026%201.348-.045%201.572-3.593%2053.354-48.107%2095.724-102.405%2095.724-27.343%200-53.104-10.716-72.541-30.126-19.35-19.303-30.03-45.126-30.03-72.531%200-27.414%2010.68-53.229%2030.028-72.541%2019.438-19.348%2045.198-30.045%2072.541-30.045%201.193%200%204.158.009%205.452.036V22.051%22%2F%3E%3C%2Fsvg%3E"
              />
            </Flex>
          </Marquee>
        </Box> */}
        {/* FEATURED COLLECTION STARTS HERE */}
        <Box>
          <Heading as="h2" size="lg" fontWeight={500} my="30px" border>
            Featured Collection
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="20px"
          >
            <GridItem>
              <ProductCard />
            </GridItem>
            <GridItem>
              <ProductCard />
            </GridItem>
            <GridItem>
              <ProductCard />
            </GridItem>
            <GridItem>
              <ProductCard />
            </GridItem>
            <GridItem>
              <ProductCard />
            </GridItem>
            <GridItem>
              <ProductCard />
            </GridItem>
          </Grid>
        </Box>

        {/* SPECIAL PRODUCTS STARTS HERE */}
        <Box>
          <Heading as="h2" size="lg" fontWeight={500} my="30px" border>
            Featured Collection
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="20px"
          >
            <GridItem>
              <SpecialProductCard />
            </GridItem>
            <GridItem>
              <SpecialProductCard />
            </GridItem>
            <GridItem>
              <SpecialProductCard />
            </GridItem>
            <GridItem>
              <SpecialProductCard />
            </GridItem>
            <GridItem>
              <SpecialProductCard />
            </GridItem>
            <GridItem>
              <SpecialProductCard />
            </GridItem>
          </Grid>
        </Box>

        {/* OUR POPULAR PRODUCTS STARTS HERE */}
        <Box>
          <Heading as="h2" size="lg" fontWeight={500} my="30px" border>
            Featured Collection
          </Heading>
          <Flex
            justify="center"
            align="center"
            // templateColumns={{
            //   base: "repeat(1, 1fr)",
            //   sm: "repeat(2, 1fr)",
            //   md: "repeat(3, 1fr)",
            //   lg: "repeat(4, 1fr)",
            // }}
            gap="20px"
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* <ProductCard /> */}
            {/* <ProductCard /> */}
          </Flex>
        </Box>

        <Box>
          <Heading as="h2" size="lg" fontWeight={500} my="30px" border>
            Our Latest Blogs
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="20px"
          >
            <GridItem>
              <BlogCard />
            </GridItem>
            <GridItem>
              <BlogCard />
            </GridItem>
            <GridItem>
              <BlogCard />
            </GridItem>
            <GridItem>
              <BlogCard />
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
