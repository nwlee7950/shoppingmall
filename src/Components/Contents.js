import React from "react";
import styled from "styled-components";

const ContentsSpace = styled.div`
  width: 100%;
  height: 5680px;
  display: flex;
`;

const LeftBox = styled.div`
  width: 20%;
  height: 5680px;
  background-color: red;
`;

const RightBox = styled.div`
  width: 80%;
  height: 5680px;
  background-color: green;
`;

const Contents = () => {
  return (
    <ContentsSpace>
      <LeftBox></LeftBox>
      <RightBox></RightBox>
    </ContentsSpace>
  );
};

export default Contents;
