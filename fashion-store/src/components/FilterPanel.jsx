import {
  Box,
  Checkbox,
  Flex,
  Tag,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
//   console.log(initialCategory);
  // check if the URL had any data before setting an data to an empty array
  const [category, setCategory] = useState(initialCategory || []);

  //   console.log(searchParams);
  //   console.log(category);
  const handleFilterCheckbox = (e) => {
    // check if the data is present in category
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      // then remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };

  //   if the category changes, then update the value in the URL search params
  useEffect(() => {
    let params = {};
    params.category = category;
    setSearchParams(params);
  }, [category, setSearchParams]);
  return (
    <>
      <VStack
        w="20%"
        spacing="10px"
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Flex
          direction="column"
          gap="40px"
          bgColor="#fff"
          w="100%"
          borderRadius="5px"
          p="10px"
        >
          <Heading as="h5" size="sm">
            Shop By Categories
          </Heading>

          <Flex direction="column" gap="5px">
            <Checkbox
              value="bag"
              onChange={handleFilterCheckbox}
              defaultChecked={category.includes("bag")}
            >
              Bag
            </Checkbox>
            <Checkbox
              value="sandal"
              onChange={handleFilterCheckbox}
              defaultChecked={category.includes("sandal")}
            >
              Sandal
            </Checkbox>
            <Checkbox
              value="clothing"
              onChange={handleFilterCheckbox}
              defaultChecked={category.includes("clothing")}
            >
              Clothing
            </Checkbox>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap="40px"
          bgColor="#fff"
          w="100%"
          borderRadius="5px"
          p="10px"
        >
          <Heading as="h5" size="sm">
            Filter By
          </Heading>
          <Flex direction="column" gap="10px">
            <Heading as="h6" size="xs">
              Availability
            </Heading>
            <Checkbox value="" id="">
              In Stock (2)
            </Checkbox>
            <Checkbox value="" id="">
              Out of stock (0)
            </Checkbox>
          </Flex>
          <Flex direction="column" gap="10px">
            <Heading as="h6" size="xs">
              Price
            </Heading>
            <Flex gap="15px" align="center" justify="space-between">
              <HStack>
                <Text>$</Text>
                <Input variant="filled" placeholder="From" />
              </HStack>
              <HStack>
                <Text>$</Text>
                <Input variant="filled" placeholder="To" />
              </HStack>
            </Flex>
          </Flex>
          <Flex direction="column" gap="10px">
            <Heading as="h6" size="xs">
              Color
            </Heading>
            <Box>
              <ul className="colors">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </Box>
          </Flex>
          <Flex direction="column" gap="10px">
            <Heading as="h6" size="xs">
              Size
            </Heading>
            <Checkbox>S (10)</Checkbox>
            <Checkbox>M (10)</Checkbox>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          gap="40px"
          bgColor="#fff"
          w="100%"
          borderRadius="5px"
          p="10px"
        >
          <Heading as="h5" size="sm">
            Product Tags
          </Heading>
          {/* <Text fontWeight="bold">Shop By Categories</Text> */}
          <Flex gap="5px" flexWrap="wrap">
            <Tag>Headphones</Tag>
            <Tag>Tv</Tag>
            <Tag>Speakers</Tag>
            <Tag>Watch</Tag>
            <Tag>Mobile Phones</Tag>
          </Flex>
        </Flex>
      </VStack>
    </>
  );
};

export default FilterPanel;
