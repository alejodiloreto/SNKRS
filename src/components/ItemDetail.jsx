import React from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';

export default function ItemDetail(props) {
  return (
    <Container>
      <ImgContainer>
        <img src={props.image} alt={props.name} width="550px" />
      </ImgContainer>

      <InfoContainer>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <h3>{props.price}</h3>
        <ItemCount stock={props.stock} />
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
