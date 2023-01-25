import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ReactStars from "react-rating-stars-component";
import "../styles/specialProductCard.css";

const SpecialProductCard = () => {
  return (
    <Box className="special-product-card">
      <Flex justify="space-between">
        <Box w="50%">
          <Image
            src="https://m.media-amazon.com/images/G/31/img22/Beauty/XCM/Beauty/Haircare/SBC-Hair_03._CB633798670_.jpg"
            alt="img"
            // h="50%"
          />
        </Box>
        <Flex direction="column" gap="10px" className="special-product-details">
          <Heading as="h6" size="xs" fontWeight={500} color="#ed5b5b">
            Havells
          </Heading>
          <Text fontWeight="bold">Hero session with havells india</Text>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value="3"
            edit={false}
            size={15}
            activeColor="#ffd700"
          />
          <Text>
            <span style={{ color: "red" }}>$100</span>&nbsp;
            <strike style={{ color: "grey" }}>$200</strike>
          </Text>
          <Flex gap="5px" align="center">
            <b>5</b>
            days
            <Flex gap="5px" align="center">
              <span>05</span>:<span>38</span>:<span>22</span>
            </Flex>
          </Flex>
          <Box>
            <Text color="gray">Products: 200</Text>
            <Progress
              colorScheme="green"
              borderRadius="5px"
              size="sm"
              value={20}
            />
          </Box>
          <Button
            colorScheme="blackAlpha"
            fontWeight="400"
            borderRadius="5px"
            size="sm"
            // w="35%"
            bgColor="black"
          >
            OPTION
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SpecialProductCard;
