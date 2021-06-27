import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header";
import Contents, { ContentsSpace } from "../../Components/Contents";

const InputField = styled.input`
  width: 400px;
  height: 40px;
`;

const LoginButton = styled.button`
  width: 400px;
  height: 30px;
`;

const LoginView = () => {
  return (
    <div>
      <Header></Header>
      <ContentsSpace>
        <InputField type="text" name="id" placeholder="아이디"></InputField>
        <InputField
          type="text"
          name="password"
          placeholder="비밀번호"
        ></InputField>
        <LoginButton>로그인</LoginButton>
      </ContentsSpace>
    </div>
  );
};
export default LoginView;
