import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Item({ name, id, image, price, stock }) {
  return (
    <StyledDiv>
      <h5>{name}</h5>
      <Link to={`/item/${id}`}>
        <img src={image} alt={name} width="300px" height="200px" />
      </Link>
      <b>${price}</b>
      <p>{stock} unidades disponibles</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px 40px 60px 40px;
  padding: 40px 10px;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 5px 5px 14px 6px rgba(0, 0, 0, 0.33);
    box-shadow: 5px 5px 14px 6px rgba(0, 0, 0, 0.33);
    transition: all 0.3s;
  }

  p {
    margin-top: 20px;
  }

  img {
    object-fit: contain;
  }
`;
