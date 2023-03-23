import React, { useRef } from "react";
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Checkbox,
  Flex,
  Tag,
  Heading,
  HStack,
  Input,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillFilter } from "react-icons/ai";

const FilterPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <AiFillFilter />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack w="100%" spacing="10px">
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
                  <Checkbox value="" id="">
                    Bag
                  </Checkbox>
                  <Checkbox value="" id="">
                    Sandal
                  </Checkbox>
                  <Checkbox value="" id="">
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

                <Flex gap="5px" flexWrap="wrap">
                  <Tag>Headphones</Tag>
                  <Tag>Tv</Tag>
                  <Tag>Speakers</Tag>
                  <Tag>Watch</Tag>
                  <Tag>Mobile Phones</Tag>
                </Flex>
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterPanel;
