import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Spacer,
  Text,
  Divider,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  DrawerHeader,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  BiCart,
  BiCategory,
  BiGitCompare,
  BiHeart,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box bgColor="#000">
        <Flex
          color="gray"
          py="5px"
          align="center"
          justify="center"
          borderBottom="1px solid gray"
          px="100px"
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        >
          <Text fontSize="13px">Free Shipping Over $100 & Free Returns</Text>
          <Spacer />
          <Flex gap="10px">
            {/* <Text fontSize="13px">English</Text> */}
            <Select variant="unstyled">
              <option value="">English</option>
              <option value="option2">Hindi</option>
              <option value="option3">German</option>
            </Select>
            <Select variant="unstyled">
              <option value="option1">USD $</option>
              <option value="option2">Rs</option>
              <option value="option3">Pound</option>
            </Select>
          </Flex>
        </Flex>

        {/*------------------->> HEADER INPUT BOX AND LOGIN PANEL <<--------------------*/}
        <Flex
          px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
          py="20px"
          align="center"
          justify="space-between"
          color="#fff"
        >
          <Link to="/">
            <Heading fontWeight="400" as="h2" size="lg">
              Fashion
            </Heading>
          </Link>
          <Spacer />
          {/* <HStack> */}
          <InputGroup
            w="45%"
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          >
            <Input
              type="search"
              placeholder="search product here"
            />
            <InputRightAddon
              _hover={{ bgColor: "#ce9739" }}
              bgColor="#e3ae52"
              color="#000"
              cursor="pointer"
              children={<BiSearch />}
            />
          </InputGroup>

          {/* </HStack> */}
          <Spacer />
          <HStack
            spacing={{ base: "10px", sm: "10px", md: "20px", lg: "20px" }}
            fontSize="12px"
          >
            <Link to="/compare-products">
              <Flex
                justify="center"
                align="center"
                gap="5px"
                display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
              >
                <BiGitCompare fontSize="25px" />
                <Box>
                  <Text>Compare</Text>
                  <Text>Products</Text>
                </Box>
              </Flex>
            </Link>
            <Link to="/wishlist">
              <Flex justify="center" align="center" gap="5px">
                <BiHeart fontSize="25px" />
                <Box
                  display={{
                    base: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                  }}
                >
                  <Text>Favourite</Text>
                  <Text>Wishlist</Text>
                </Box>
                <Text
                  display={{
                    base: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                  }}
                >
                  Wishlist
                </Text>
              </Flex>
            </Link>
            <Link to="/login">
              <Flex
                justify="center"
                align="center"
                gap="5px"
                display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
              >
                <BiUser fontSize="25px" />
                <Box>
                  <Text>Log in</Text>
                  <Text>My Account</Text>
                </Box>
              </Flex>
            </Link>
            <Link to="/cart">
              <Flex justify="center" align="center" gap="5px">
                <BiCart fontSize="25px" color="#e3ae52" />
                <Box>
                  <Text
                    bgColor="white"
                    color="#000"
                    // py="5px"
                    px="5px"
                    borderRadius="50%"
                  >
                    0
                  </Text>
                  {/* <Text>$0.00</Text> */}
                </Box>
              </Flex>
            </Link>
          </HStack>
        </Flex>

        {/*------------------->> HEADER CATEGORIES AND NAVLINK  PART  <<--------------------------------*/}
        <Flex
          bgColor="#232f3e"
          px={{ base: "10px", sm: "10px", md: "50px", lg: "100px" }}
          color="#fff"
          py="10px"
          justify="space-between"
        >
          <Button
            ref={btnRef}
            onClick={onOpen}
            color="#fff"
            fontSize="25px"
            variant="link"
            borderRadius="5px"
            display={{ base: "block", sm: "block", md: "block", lg: "none" }}
          >
            <RxHamburgerMenu />
          </Button>
          {/* <Button
            variant="link"
            display={{ base: "block", sm: "block", md: "block", lg: "none" }}
          >
            <BiSearch fontSize="25px" />
          </Button> */}

          {/* RESPONSIVE SMALL SCREEN AND MEDUIUM SCREEN SEARCH BOX */}
          <InputGroup
            w={{ base: "80%", sm: "80%", md: "50%", lg: "50%" }}
            display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
          >
            <Input
              type="search"
              placeholder="search product here"
              // _focus={{ borderColor: "#e3ae52", outlineColor: "none" }}
            />
            <InputRightAddon
              _hover={{ bgColor: "#ce9739" }}
              bgColor="#e3ae52"
              color="#000"
              cursor="pointer"
              children={<BiSearch />}
            />
          </InputGroup>
          <HStack
            borderRight="1px solid gray"
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          >
            <BiCategory fontSize="25px" />
            <Select
              variant="unstyled"
              color="#a8a2a2"
              w="250px"
              fontSize="14px"
            >
              <option value="option1">SHOP CATEGORIES</option>
              <option value="option2">MEN</option>
              <option value="option3">WOMEN</option>
            </Select>
          </HStack>
          {/* <Divider orientation="vertical" /> */}
          <Flex
            justify="space-around"
            align="center"
            w="35%"
            fontSize="14px"
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          >
            <Link to="/">HOME</Link>
            <Link to="/store">OUR STORE</Link>
            <Link to="/blogs">BLOGS</Link>
            <Link to="/contact">CONTACT</Link>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="#232f3e" color="#fff">
              <DrawerCloseButton />
              <Link to="/">
                <DrawerHeader>Fashion</DrawerHeader>
              </Link>

              <DrawerBody>
                <HStack pb="15px" mb="20px" borderBottom="1px solid gray">
                  <BiCategory fontSize="25px" />
                  <Select
                    variant="unstyled"
                    color="#a8a2a2"
                    w="250px"
                    fontSize="14px"
                  >
                    <option value="option1">SHOP CATEGORIES</option>
                    <option value="option2">MEN</option>
                    <option value="option3">WOMEN</option>
                  </Select>
                </HStack>
                <Flex
                  justify="space-around"
                  direction="column"
                  align="center"
                  gap="20px"
                  // w="35%"
                  fontSize="14px"
                >
                  <Link to="/">HOME</Link>
                  <Link to="/store">OUR STORE</Link>
                  <Link to="/blogs">BLOGS</Link>
                  <Link to="/contact">CONTACT</Link>

                  <Link to="/login">
                    <Flex justify="center" align="center" gap="5px">
                      <BiUser fontSize="25px" />
                      <Text>Log in</Text>
                    </Flex>
                  </Link>
                </Flex>
                <VStack spacing="20px" fontSize="12px"></VStack>
              </DrawerBody>

              {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
