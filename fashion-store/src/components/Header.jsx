import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Spacer,
  Text,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  DrawerHeader,
  VStack,
  Menu,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuList,
  MenuButton,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  BiCart,
  BiCategory,
  BiGitCompare,
  BiHeart,
  BiSearch,
  BiUser,
} from "react-icons/bi";
import { Link, useSearchParams } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
// import { getCartItems } from "../redux/cart/action";
import { logoutUser } from "../redux/auth/action";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // const { cartItems } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  // const location = queryParams.get("location");
  const toast = useToast();

  // console.log({ queryParams, term });

  // console.log("header", user);
  const handleLogout = () => {
    dispatch(logoutUser(toast));
  };

  const handleSearch = () => {
    // console.log(query);
    if (query.trim()) {
      // history.push(`/store/${query}`);
      setSearchParams({ query: query });

      // navigate("/store");
    }
  };

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch]);
  return (
    <>
      <Box bgColor="#000" zIndex={10} position={"sticky"} top={"0px"}>
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
          // color="#fff"
        >
          <Link to="/">
            <Heading fontWeight="400" as="h2" size="lg" color="#fff">
              Fashion
            </Heading>
          </Link>
          <Spacer />
          {/* <HStack> */}
          <InputGroup
            w="45%"
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
            color="#fff"
          >
            <Input
              type="text"
              placeholder="search product here"
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputRightAddon
              _hover={{ bgColor: "#ce9739" }}
              bgColor="#e3ae52"
              color="#000"
              cursor="pointer"
              children={<BiSearch />}
              onClick={handleSearch}
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
                color="#fff"
              >
                <BiGitCompare fontSize="25px" />
                <Box>
                  <Text>Compare</Text>
                </Box>
              </Flex>
            </Link>
            <Link to="/wishlist">
              <Flex justify="center" align="center" gap="5px" color="#fff">
                <BiHeart fontSize="25px" />
                <Box
                  display={{
                    base: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                  }}
                >
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
            {isAuthenticated ? (
              <Menu>
                <Flex justify="center" align="center" gap="5px">
                  <BiUser fontSize="25px" color="#fff" />
                  <MenuButton
                    as={Button}
                    m="-10px"
                    p="0"
                    fontSize="12px"
                    colorScheme="#000"
                    textTransform={"uppercase"}
                  >
                    {user?.firstName}
                  </MenuButton>
                </Flex>
                <MenuList>
                  <MenuGroup title="My Account">
                    {user?.role === "admin" && (
                      <Link to="/dashboard">
                        <MenuItem>Dashboard</MenuItem>
                      </Link>
                    )}
                    <Link to="/profile">
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link to="/my-orders">
                      <MenuItem>Orders</MenuItem>
                    </Link>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Help">
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            ) : (
              <Menu>
                <Flex justify="center" align="center" gap="5px">
                  <BiUser fontSize="25px" color="#fff" />
                  <MenuButton
                    as={Button}
                    m="-10px"
                    p="0"
                    fontSize="12px"
                    colorScheme="#000"
                    textTransform={"uppercase"}
                  >
                    User
                  </MenuButton>
                </Flex>
                <MenuList>
                  <MenuGroup title="User">
                    <Link to="/register">
                      <MenuItem>Register</MenuItem>
                    </Link>
                    <Link to="/login">
                      <MenuItem>Login</MenuItem>
                    </Link>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
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
                    {cartItems?.length}
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
              onChange={(e) => setQuery(e.target.value)}
              // _focus={{ borderColor: "#e3ae52", outlineColor: "none" }}
            />
            <InputRightAddon
              _hover={{ bgColor: "#ce9739" }}
              bgColor="#e3ae52"
              color="#000"
              cursor="pointer"
              children={<BiSearch />}
              onClick={handleSearch}
            />
          </InputGroup>
          <HStack
            borderRight="1px solid gray"
            display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          >
            <BiCategory fontSize="25px" />
            <Select
              variant="unstyled"
              bgColor="#232f3e"
              color="#a8a2a2"
              w="250px"
              fontSize="14px"
            >
              <option value="">SHOP CATEGORIES</option>
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
