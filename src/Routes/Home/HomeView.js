import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import Contents, { ContentsSpace } from "../../Components/Contents";

const HomeView = () => {
  return (
    <div>
      <Header />
      <ContentsSpace>
        {/* <button
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
        </button> */}
        dd
      </ContentsSpace>
    </div>
  );
};
export default HomeView;
