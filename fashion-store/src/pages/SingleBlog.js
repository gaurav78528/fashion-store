import { Box } from "@chakra-ui/react";
import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <Box bgColor="#f5f5f7">
      <Meta title={"Dynamic blog name"} />
      <BreadCrumb title={"Dynamic blog name"} />
    </Box>
  );
};

export default SingleBlog;
