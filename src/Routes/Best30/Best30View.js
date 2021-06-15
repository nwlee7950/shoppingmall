import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Best30View = () => {
  return (
    <div>
      로그인
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        버어튼
      </button>
    </div>
  );
};
export default Best30View;
