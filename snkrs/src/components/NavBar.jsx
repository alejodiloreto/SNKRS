import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <div>
      <Nav>
        <div>
          <li>SNKRS</li>
        </div>
        <ListItemDiv>
          <li>Home</li>
          <li>Nosotros</li>
          <li>
            <CartWidget />
          </li>
        </ListItemDiv>
      </Nav>
    </div>
  );
}

const Nav = styled.ul`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
  color: #313131;

  li {
    font-size: 18px;
    list-style: none;
    cursor: pointer;
    transition: all 0.2s;

    &:last-child {
      font-size: 30px;
    }

    &:hover {
      color: #b9b9b9;
    }
  }
`;

const ListItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 370px;
`;
