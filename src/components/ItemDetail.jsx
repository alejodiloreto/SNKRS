import React from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';

export default function ItemDetail({ image, name, description, price, stock }) {
  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={name} width="550px" />
      </ImgContainer>

      <InfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
        <ItemCount stock={stock} />
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1400px;
  margin: 0 auto;
`;

const ImgContainer = styled.div``;

const InfoContainer = styled.div`
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  p {
    font-size: 18px;
  }
`;
