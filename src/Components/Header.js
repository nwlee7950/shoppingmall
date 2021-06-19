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
          <Link to="/best30">BEST 30</Link>
        </ListItem>
        <ListItem>
          <Link to="/sale">SALE</Link>
        </ListItem>
        <ListItem>
          <Link to="/shop">SHOP</Link>
        </ListItem>
        <ListItem>
          <Link to="/lookbook">LOOKBOOK</Link>
        </ListItem>
      </List>
      <HeaderLogo src={Logo}></HeaderLogo>
      <List>
        <ListItem>
          <Link to="/community">COMMUNITY</Link>
        </ListItem>
        <ListItem>
          <Link to="/account">ACCOUNT</Link>
        </ListItem>
        <ListItem>
          <Link to="/cart">CART</Link>
        </ListItem>
      </List>
    </HeaderSpace>
  );
};

export default Header;
