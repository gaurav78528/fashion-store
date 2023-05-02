import { Flex } from "@chakra-ui/react";
import React from "react";
import { BiEdit, BiLinkExternal, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  return (
    <tr>
      <td data-label="ProductID">{item?._id}</td>
      <td data-label="Title">{item?.title}</td>
      <td data-label="Stock">{item?.stock}</td>
      <td data-label="Mrp">{item?.mrp}</td>
      <td data-label="Update">
        <Link to={`/admin/products/update/${item._id} `}>
          <Flex justify="center" align="center">
            <BiEdit fontSize={"20px"} />
          </Flex>
        </Link>
      </td>
      <td data-label="Delete">
        <Flex justify="center" align="center" cursor="pointer">
          <BiTrash fontSize={"20px"} color="red" />
        </Flex>
      </td>
    </tr>
  );
};

export default ProductItem;
