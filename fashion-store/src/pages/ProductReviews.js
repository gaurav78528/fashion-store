import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteReviews, getAllReviews } from "../redux/products/action";
import { DELETE_REVIEW_RESET } from "../redux/products/actionTypes";
import Review from "../components/Admin/Review";

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

  //   const columns = [
  //     { field: "id", headerName: "Review ID", minWidth: 200, flex: 0.5 },

  //     {
  //       field: "user",
  //       headerName: "User",
  //       minWidth: 200,
  //       flex: 0.6,
  //     },

  //     {
  //       field: "comment",
  //       headerName: "Comment",
  //       minWidth: 350,
  //       flex: 1,
  //     },

  //     {
  //       field: "rating",
  //       headerName: "Rating",
  //       type: "number",
  //       minWidth: 180,
  //       flex: 0.4,

  //       cellClassName: (params) => {
  //         return params.getValue(params.id, "rating") >= 3
  //           ? "greenColor"
  //           : "redColor";
  //       },
  //     },

  //     {
  //       field: "actions",
  //       flex: 0.3,
  //       headerName: "Actions",
  //       minWidth: 150,
  //       type: "number",
  //       sortable: false,
  //       renderCell: (params) => {
  //         return (
  //           <Fragment>
  //             <Button
  //               onClick={() =>
  //                 deleteReviewHandler(params.getValue(params.id, "id"))
  //               }
  //             >
  //               <DeleteIcon />
  //             </Button>
  //           </Fragment>
  //         );
  //       },
  //     },
  //   ];

  //   const rows = [];

  return (
    <Fragment>
      {/* <MetaData title={`ALL REVIEWS - Admin`} /> */}

      <div className="dashboard">
        {/* <SideBar /> */}
        <div className="productReviewsContainer">
          <form
            className="productReviewsForm"
            onSubmit={productReviewsSubmitHandler}
          >
            <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>

            <div>
              {/* <Star /> */}
              <input
                type="text"
                placeholder="Product Id"
                required
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>

            <button
              id="createProductBtn"
              type="submit"
              disabled={
                isLoading ? true : false || productId === "" ? true : false
              }
            >
              Search
            </button>
          </form>

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
              {!isLoading
                ? reviews?.map((item) => (
                    <Review
                      key={item._id}
                      item={item}
                      loading={isLoading}
                      deleteReviewHandler={deleteReviewHandler}
                    />
                  ))
                : "loading....."}
            </tbody>
          </table>

          {/* {reviews && reviews.length > 0 ? (
            
          ) : (
            <h1 className="productReviewsFormHeading">No Reviews Found</h1>
          )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductReviews;