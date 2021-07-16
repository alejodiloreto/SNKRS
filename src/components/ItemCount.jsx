import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function ItemCount(props) {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < props.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <ItemCountContainer>
      <ControlContainer>
        <Controles variant="outlined" onClick={restar}>
          <p>-</p>
        </Controles>
        <p>{contador}</p>
        <Controles variant="outlined" onClick={sumar}>
          <p>+</p>
        </Controles>
      </ControlContainer>
      <Stock>Stock disponible: {props.stock}</Stock>
      <AddToCart variant="outlined" type="submit">
        <p>Agregar al carrito</p>
      </AddToCart>
    </ItemCountContainer>
  );
}

const ItemCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px 0px;

  p:nth-child(2) {
    margin: 0 30px;
  }
`;

const Controles = styled(Button)`
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);

  p {
    color: white;
  }
`;

const Stock = styled.h5`
  margin: 20px 0;
  text-align: center;
`;

const AddToCart = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);

  p {
    color: white;
    text-transform: none;
    font-size: 16px;
  }
`;
