import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/loaderSlice";
import { SetUser } from "../redux/userSlice";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loader } = useSelector((state) => state.user);

  const getValidUserDetails = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetCurrentUser();
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        dispatch(SetUser(null));
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (err) {
      dispatch(HideLoading());
      dispatch(SetUser(null));
      localStorage.removeItem("token");
      navigate("/login");
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUserDetails();
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedRoute;
