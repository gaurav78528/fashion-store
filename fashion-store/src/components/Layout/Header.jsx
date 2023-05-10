import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getCartItems } from "../redux/cart/action";
import { logoutUser } from "../../redux/auth/action";
import TopNav from "../header/TopNav";
import MainNav from "../header/MainNav";
import NavLinks from "../header/NavLinks";

const Header = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef();
  // const { cartItems } = useSelector((state) => state.cart);
  // const { cartItems } = useSelector((state) => state.cart);
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  // const [token, setToken] = useState(localStorage.getItem("token") || "");
  // const [query, setQuery] = useState("");
  // const [searchParams, setSearchParams] = useSearchParams();
  // const dispatch = useDispatch();

  // const location = queryParams.get("location");
  // const toast = useToast();

  // const navigate = useNavigate();

  // console.log({ queryParams, term });

  // console.log("header", user);
  // const handleLogout = () => {
  //   dispatch(logoutUser(toast));
  // };

  // const handleSearch = () => {
  //   // console.log(query);
  //   if (query.trim()) {
  //     setSearchParams({ query: query });
  //   }
  // };

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch]);
  return (
    <>
      <Box bgColor="#000" zIndex={10} position={"sticky"} top={"0px"}>
        {/*------------------->> Top Nav <<--------------------*/}
        <TopNav />

        {/*------------------->> Main Nav <<--------------------*/}
        <MainNav />

        {/*------------------->> HEADER CATEGORIES AND NAVLINK  PART  <<--------------------------------*/}
        <NavLinks />
      </Box>
    </>
  );
};

export default Header;
