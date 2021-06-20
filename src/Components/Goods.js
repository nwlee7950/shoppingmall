import React from "react";
import styled from "styled-components";

const GoodsSpace = styled.div`
  width: 100%;
  height: 5680px;
  display: flex;
`;

const GoodsInfo = styled.div`
  width: 20%;
  height: 5680px;
  background-color: red;
`;

const GoodsOption = styled.div`
  width: 300px;
  height: 300px;
  background-color: blue;
`;

const Goods = () => {
  return (
    <GoodsSpace>
      <GoodsInfo></GoodsInfo>
      <GoodsOption></GoodsOption>
    </GoodsSpace>
  );
};

export default Goods;
