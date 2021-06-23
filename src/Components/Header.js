import React from "react";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import { Link } from "react-router-dom";
import Login from "../Routes/Login";
import Register from "../Routes/Register";
import Logo from "../Images/Logo.png";
import Best30 from "../Routes/Best30";

const HeaderSpace = styled.header`
  width: 100%
  height: 100px;
  display: flex;
  border-bottom: solid;
  background-color: #cabfb7;
  position: sticky;
  top: 0;
  align-items: center;
`;

const HeaderLogo = styled.img`
  width: 170px;
  text-align: center;
`;

const List = styled.ul`
  width: 400px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  float: left;
  backgorund-color: red;
  margin-right: 28px;
  margin-top: 30px;
  height: 25px;
  font-size: 18px;
  font-color: black;
  font-weight: bold;
  text-decoration: none;
`;

// const options = [
//   { value: "one", label: "One" },
//   { value: "two", label: "Two", className: "myOptionClassName" },
//   {
//     type: "group",
//     name: "group1",
//     items: [
//       { value: "three", label: "Three", className: "myOptionClassName" },
//       { value: "four", label: "Four" },
//     ],
//   },
//   {
//     type: "group",
//     name: "group2",
//     items: [
//       { value: "five", label: "Five" },
//       { value: "six", label: "Six" },
//     ],
//   },
// ];

const Header = () => {
  return (
    <HeaderSpace>
      <List>
        <ListItem>
          <Link to="/best30" style={{ color: "black", textDecoration: "none" }}>
            BEST 30
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/sale" style={{ color: "black", textDecoration: "none" }}>
            SALE
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/shop" style={{ color: "black", textDecoration: "none" }}>
            SHOP
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/lookbook"
            style={{ color: "black", textDecoration: "none" }}
          >
            LOOKBOOK
          </Link>
        </ListItem>
      </List>
      <a href="/">
        <HeaderLogo src={Logo}></HeaderLogo>
      </a>
      <List>
        <ListItem>
          <Link
            to="/community"
            style={{ color: "black", textDecoration: "none" }}
          >
            COMMUNITY
          </Link>
        </ListItem>
        <ListItem>
          <Link
            to="/account"
            style={{ color: "black", textDecoration: "none" }}
          >
            ACCOUNT
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
            CART
          </Link>
        </ListItem>
      </List>
    </HeaderSpace>
  );
};

export default Header;
