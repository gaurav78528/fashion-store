import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  console.log(review);
  const ratingOptions = {
    count: 5,
    // onChange:{ratingChanged},
    value: review.rating,
    edit: false,
    size: 24,
    activeColor: "#ffd700",
  };
  return (
    <Box>
      <Avatar
        name={review.name}
        bgColor={"gray.100"}
        src="https://bit.ly/tioluwani-kolawole"
      />
      <Text>{review.name}</Text>
      <ReactStars {...ratingOptions} />
      <Text>{review.comment}</Text>
    </Box>
  );
};

export default ReviewCard;
