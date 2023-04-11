import { Skeleton, Box } from "@chakra-ui/react";
import React from "react";

const Loader = ({ heightProps, widthProps }) => {
  // console.log(heightProps);
  return <Skeleton h={heightProps} w={widthProps} />;
};

export default Loader;
