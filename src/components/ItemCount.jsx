import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function ItemCount({ stock, valor, setValor }) {
  const sumar = () => {
    if (valor < stock) {
      setValor(valor + 1);
    }
  };

  const restar = () => {
    if (valor > 1) {
      setValor(valor - 1);
    }
  };

  return (
    <ItemCountContainer>
      <ControlContainer>
        <Controles variant="outlined" onClick={restar}>
          <p>-</p>
        </Controles>
        <p>{valor}</p>
        <Controles variant="outlined" onClick={sumar}>
          <p>+</p>
        </Controles>
      </ControlContainer>
      <Stock>Stock disponible: {stock}</Stock>
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
