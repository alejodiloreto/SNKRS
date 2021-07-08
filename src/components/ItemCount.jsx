import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function ItemCount() {
  const [contador, setContador] = useState(1);

  const stock = 10;

  const sumar = () => {
    if (contador < stock) {
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
      <MyContainer maxWidth="sm">
        <h5>Nike Air Jordan III</h5>
        <ControlContainer>
          <Controles variant="outlined" onClick={restar}>
            -
          </Controles>
          <p>{contador}</p>
          <Controles variant="outlined" onClick={sumar}>
            +
          </Controles>
        </ControlContainer>
        <Stock>Stock disponible: {stock}</Stock>
        <AddToCart variant="outlined" type="submit">
          Agregar al carrito
        </AddToCart>
      </MyContainer>
    </div>
  );
}

const MyContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '60px',
});

const ControlContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '30px 0px',
});

const Controles = styled(Button)({
  background: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
  color: 'white',
});

const Stock = styled('h5')({
  margin: '20px 0',
});

const AddToCart = styled(Button)({
  background: 'linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)',
  color: 'white',
});
