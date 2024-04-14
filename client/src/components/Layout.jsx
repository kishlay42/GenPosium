import React from "react";
import { Header, Footer, Tabs } from "./index";
import { Outlet } from "react-router-dom";
import  ScrollToTop  from "./Usables/ScrollToTop";
const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Tabs />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
