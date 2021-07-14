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
    <div>
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
    </div>
  );
}

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
