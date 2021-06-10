import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Login from "../Routes/Login";

// const listStyle = styled.li`   list-style: none;   align-items: center; `;
const HeaderSpace = styled.header `
width:100%
height: 80px;
display: flex;
background-color: #bdc3c7;
`;

const HeaderLogo = styled.img`
justify-content: center;
`;

const Header = () => {
    return (
      <HeaderSpace>
        <ul id="header_contents">
            <Link to="/login">BEST 30</Link>
            <Link to="/login">SALE</Link>
            <Link to="/login">SHOP</Link>
            <Link to="/login">LOOKBOOK</Link>
        </ul>
      </HeaderSpace>
    );
};

export default Header;