import React from "react";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <div>
      <Nav>
        <div className="logo-container">
          <li>SNKRS</li>
        </div>
        <div className="list-items-container">
          <li>Home</li>
          <li>Nosotros</li>
          <li>
            <IoCartOutline />
          </li>
        </div>
      </Nav>
    </div>
  );
}

const Nav = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 20px;
  justify-content: space-evenly;
  color: #313131;

  .list-items-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 370px;
  }

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
