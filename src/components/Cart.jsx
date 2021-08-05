import React from 'react';
import { useCartContext } from './CartContext';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export default function Cart() {
  const { cartItem, clear, removeItem, cartCount, totalPrice } =
    useCartContext();

  return (
    <Container>
      <h1>Carrito</h1>
      <ItemsDiv>
        {cartItem.length > 0 &&
          cartItem.map((item, index) => {
            return (
              <ItemDiv key={index}>
                <h3>{item.item.title}</h3>
                <img
                  src={item.item.pictureUrl}
                  width="200"
                  alt="item.item.title"
                />
                <p>
                  <b>Precio: </b>
                  {item.item.price}
                </p>
                <p>
                  <b>Cantidad: </b>
                  {item.qty}
                </p>
                <Buttons
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  <p>Eliminar producto</p>
                </Buttons>
              </ItemDiv>
            );
          })}
      </ItemsDiv>
      {cartCount > 0 ? (
        <>
          <Total>Total: ${totalPrice} </Total>
          <Buttons onClick={clear}>
            <p>Vaciar Carrito</p>
          </Buttons>
        </>
      ) : (
        <>
          <Message>No hay productos seleccionados</Message>
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 1400px;
  margin: 55px auto;
`;

const Buttons = styled(Button)`
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);

  p {
    color: white;
    text-decoration: none;
    text-transform: none;
    font-size: 16px;
  }
`;

const Total = styled.b`
  margin: 20px auto;
`;

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  margin: 30px;
`;

const ItemsDiv = styled.div`
  display: flex;
`;

const Message = styled.p`
  margin: 40px 0;
`;
