import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const ShopByBrand = () => {
  const navigate = useNavigate();
  let desc =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est culpa dolores dicta nihil perferendis, impedit quam doloremque odita.";
  return (
    <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Box>
        <Image
          // w="50%"
          // h="50
          src="https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Haircare/SBC-Hair_01._CB633798670_.jpg"
          alt="img"
          borderTopRadius="10px"
        />
        <Flex
          direction="column"
          justify="center"
          gap="10px"
          py="20px"
          px="10px"
        >
          <Text fontSize="13px" fontWeight={600} color="gray">
            11 JUNE, 2022
          </Text>
          <Heading as="h6" size="xs">
            Hello World gaurav
          </Heading>
          <Text fontSize="12px" fontWeight={600} color="gray">
            {desc.length > 100 ? `${desc.slice(0, 100)}.....` : desc}
          </Text>
          <Button
            colorScheme="blackAlpha"
            fontWeight="400"
            borderRadius="5px"
            size="sm"
            // w="35%"
            transition="0.5s"
            bgColor="black"
            onClick={() => navigate("/blog/id")}
          >
            READ MORE
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ShopByBrand;
