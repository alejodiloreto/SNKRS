import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ItemCount from './ItemCount';

export default function Item(props) {
  return (
    <StyledDiv>
      <h5>{props.name}</h5>
      <img src={props.image} alt={props.name} width="300px" height="200px" />
      <p>{props.price}</p>
      <ItemCount stock={props.stock} />
      <AddToCart variant="outlined" type="submit">
        <p>Agregar al carrito</p>
      </AddToCart>
    </StyledDiv>
  );
}

const AddToCart = styled(Button)`
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);

  p {
    color: white;
  }
`;

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

  img {
    object-fit: contain;
  }
`;
