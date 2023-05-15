import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteReviews, getAllReviews } from "../redux/products/action";
import { DELETE_REVIEW_RESET } from "../redux/products/actionTypes";
import Review from "../components/Admin/Review";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

const ProductReviews = () => {
  const dispatch = useDispatch();

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.review
  );

  const { error, reviews, isLoading } = useSelector(
    (state) => state.productReviews
  );

  const [productId, setProductId] = useState("");

  const deleteReviewHandler = (reviewId) => {
    dispatch(deleteReviews(reviewId, productId));
  };

  const productReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllReviews(productId));
  };
  console.log(error,deleteError);

  useEffect(() => {
    if (productId.length === 24) {
      dispatch(getAllReviews(productId));
    }
    if (error) {
      alert(error);
    }

    if (deleteError) {
      alert(deleteError);
    }

    if (isDeleted) {
      alert("Review Deleted Successfully");
      //   history.push("/admin/reviews");
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, error, deleteError, isDeleted, productId]);

  return (
    <>
      <Box>
        <Stack
          w="100vw"
          border="1px solid red"
          align="center"
          justifyContent="center"
        >
          <form onSubmit={productReviewsSubmitHandler}>
            <Heading w="100%" textAlign={"center"} fontWeight={600} my="20px">
              All REVIEWS
            </Heading>
            <Flex justify="center" align={"center"} gap="10px" my="20px">
              <FormControl>
                <Input
                  type="type"
                  placeholder="Product Id"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </FormControl>

              <Button
                colorScheme="#000"
                bgColor="#000"
                _hover={{ bgColor: "#e3ae52", color: "#000" }}
                color="white"
                variant="solid"
                type="submit"
                isDisabled={
                  isLoading ? true : false || productId === "" ? true : false
                }
              >
                Search
              </Button>
            </Flex>
          </form>
        </Stack>
        <table className="table">
          <thead>
            <tr>
              <th>ReviewID</th>
              <th>User</th>
              <th>Comment</th>
              <th>rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? "loading....."
              : reviews.length === 0
              ? "no reviews found"
              : reviews?.map((item) => (
                  <Review
                    key={item._id}
                    item={item}
                    loading={isLoading}
                    deleteReviewHandler={deleteReviewHandler}
                  />
                ))}
            {/* reviews.length===0 */}
          </tbody>
        </table>

        {/* {reviews && reviews.length > 0 ? (
            
          ) : (
            <h1 className="productReviewsFormHeading">No Reviews Found</h1>
          )} */}
      </Box>
    </>
  );
};

export default ProductReviews;
