import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Logo from "../Images/Logo.png";

const HeaderSpace = styled.header`
  width: 100%
  height: 80px;
  display: flex;
  border-bottom: solid;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  width: 170px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  background-color: black;
`;

const ListItem = styled.li`
  background-color: green;
  float: left;
  margin-right: 20px;
`;

const Header = () => {
  return (
    <HeaderSpace>
      <List>
        <ListItem>
          <Link to="/login">BEST 30</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">SALE</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">SHOP</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">LOOKBOOK</Link>
        </ListItem>
      </List>
      <HeaderLogo src={Logo}></HeaderLogo>
      <List>
        <ListItem>
          <Link to="/login">COMMUNITY</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">ACCOUNT</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">CART</Link>
        </ListItem>
      </List>
    </HeaderSpace>
  );
};

export default Header;
