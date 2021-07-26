import React, { useState } from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function ItemDetail({ image, name, description, price, stock }) {
  const [oculto, setOculto] = useState(true);
  /* console.log(oculto); */
  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={name} width="550px" />
      </ImgContainer>

      <InfoContainer>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>{price}</h3>
        {oculto ? (
          <ItemCount stock={stock} setOculto={setOculto} />
        ) : (
          <Link to="/cart">
            <TerminarCompra>
              <p>Terminar mi compra</p>
            </TerminarCompra>
          </Link>
        )}
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
    text-decoration: none;
  }
`;

const TerminarCompra = styled(Button)`
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);

  p {
    color: white;
    text-transform: none;
    font-size: 16px;
  }
`;
