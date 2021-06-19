import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Contents from "../../Components/Contents";

const ShopView = () => {
  return (
    <div>
      <Header />
      <Contents></Contents>
      <Footer />
    </div>
  );
};
export default ShopView;
