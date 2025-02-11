import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLoading, userError, userData } from "../slices/userInfoSlice";

function UserInfoRedux() {
  const { user, error, loading } = useSelector((store) => store.userState);
  const dispatch = useDispatch();

  useEffect(function () {
    (async function () {
      try {
        dispatch(userLoading());
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const user = await resp.json();
        console.log("user", user);
        dispatch(userData(user));
      } catch (err) {
        dispatch(userError());
      }
    })();
  }, []);

  const heading = <h2>User Example</h2>;

  if (loading) {
    return (
      <>
        {heading}
        <h3>...Loading</h3>
      </>
    );
  }
  //if error
  if (error) {
    return (
      <>
        {heading}
        <h3>Error occurred</h3>
      </>
    );
  }
  return (
    <>
      {heading}
      <h4>Name: {user.name}</h4>
      <h4>Phone: {user.phone}</h4>
    </>
  );
}

export default UserInfoRedux;
