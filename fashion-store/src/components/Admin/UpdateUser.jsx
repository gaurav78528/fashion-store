import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserDetails, updateUser } from "../../redux/users/action";
import { UPDATE_USER_RESET } from "../../redux/users/actionTypes";

const UpdateUser = () => {
  const dispatch = useDispatch();

  const { isLoading, error, user } = useSelector((state) => state.userDetails);

  const {
    isLoading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { id: userId } = useParams();

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setFirstName(user.firstName);
      setEmail(user.email);
      setRole(user.role);
    }
    if (error) {
      toast.error(error);
    }

    if (updateError) {
      toast.error(updateError);
    }

    if (isUpdated) {
      toast.success(
        `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} is Now an ${
          role.charAt(0).toUpperCase() + role.slice(1)
        }`
      );
      setFirstName("");
      setEmail("");
      setRole("");

      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, error, isUpdated, updateError, user, userId]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUser(userId, { firstName, email, role }));
  };

  return (
    <Fragment>
      {/* <MetaData title="Update User" /> */}
      <div className="dashboard">
        {/* <SideBar /> */}
        <div className="newProductContainer">
          {isLoading ? (
            // <Loader />
            "loading..."
          ) : (
            <form
              className="createProductForm"
              onSubmit={updateUserSubmitHandler}
            >
              <h1>Update User</h1>

              <div>
                {/* <PersonIcon /> */}
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                {/* <MailOutlineIcon /> */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                {/* <VerifiedUserIcon /> */}
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <button
                id="createProductBtn"
                type="submit"
                disabled={
                  updateLoading ? true : false || role === "" ? true : false
                }
              >
                Update
              </button>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
