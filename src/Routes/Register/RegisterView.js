import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterView = () => {
  return (
    <div>
      회원가입
      <input placeholder="아이디"></input>
      <input placeholder="비밀번호"></input>
      <input placeholder="비밀번호 재확인"></input>
      <input placeholder="이름"></input>
      <input placeholder="연락처"></input>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        가입하기
      </button>
    </div>
  );
};
export default RegisterView;
