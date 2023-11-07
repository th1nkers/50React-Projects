import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

const RootLayout = () => {

    const location = useLocation();

    const isLoginPage = location.pathname==='/login'

  return (
    <>
      {!isLoginPage && <Header />}
      <Outlet />
    </>
  );
};

export default RootLayout;
