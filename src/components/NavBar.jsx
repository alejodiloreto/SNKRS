import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SimpleMenu from './SimpleMenu';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <div>
      <Nav>
        <div>
          <li>
            <Link to="/">SNKRS</Link>
          </li>
        </div>
        <ListItemDiv>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <SimpleMenu />
          </li>
          <li>
            <Link to="/cart">
              <CartWidget />
            </Link>
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

    a {
      text-decoration: none;
      color: inherit;
    }

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
