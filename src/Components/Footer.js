import React from "react";
import styled from "styled-components";

const FooterSpace = styled.div`
  width: 100%
  height: 80px;
  border-top: solid;
  background-color: #cabfb7;
`;

const Footer = () => {
  return (
    <FooterSpace>
      COMPANY : 겟무드 CEO : 이승현 TEL : 010-7424-7950 고객 지원센터 :
      02-1234-5678 평일 : AM 10:00 - PM 5:00 토요일/일요일/공휴일 휴무 계좌정보
      신한 110-449-403468 예금주 이승현(겟무드) SOCIAL (인스타그램) (페이스북)
      (카카오톡) ABOUT US COMPANY AGREEMENT PRIVACY POLICY EXCHANGE&REFUND
    </FooterSpace>
  );
};

export default Footer;
