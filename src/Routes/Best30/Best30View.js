import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";

const Best30View = () => {
  return (
    <TotalContainer>
      베스트30
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        {/* 여기 리스트 만들어야됨 */}
      </button>
    </TotalContainer>
  );
};
export default Best30View;
