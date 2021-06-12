import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";

const HomeView = () => {
  return (
    <div>
      <Header />홈
      <button
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        버어튼
      </button>
      <button
        onClick={() => {
          window.location.href = "/register";
        }}
      >
        회원가입
      </button>
    </div>
  );
};
export default HomeView;
