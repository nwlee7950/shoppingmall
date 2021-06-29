import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { InputField } from "../Login/LoginView";

const RegisterView = () => {
  return (
    <div>
      <Header></Header>

      <InputField placeholder="아이디"></InputField>
      <InputField placeholder="비밀번호"></InputField>
      <InputField placeholder="비밀번호 재확인"></InputField>
      <InputField placeholder="이름"></InputField>
      <InputField placeholder="연락처"></InputField>
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
