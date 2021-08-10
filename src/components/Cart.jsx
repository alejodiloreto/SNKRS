import { useState } from 'react';
import Form from './Form';
import { useCartContext } from './CartContext';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { getFirestore } from '../firebase';

export default function Cart() {
  const [confirmacion, setConfirmacion] = useState(false);

  const [datos, setDatos] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const { cartItem, clear, removeItem, cartCount, totalPrice } =
    useCartContext();

  const actualDate = new Date();

  const createOrder = () => {
    const nueva_orden = {
      buyer: datos,
      items: cartItem,
      date: `${actualDate.getDate()}/${
        actualDate.getMonth() + 1
      }/${actualDate.getFullYear()}`,
      totalPrice,
    };

    const firestore = getFirestore();
    const collection = firestore.collection('orders');
    const query = collection.add(nueva_orden);

    query
      .then((resultado) => {
        setConfirmacion(resultado.id);
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1>Carrito</h1>
      <ItemsDiv>
        {cartItem.length > 0 &&
          cartItem.map((item, index) => {
            return (
              <ItemDiv key={index}>
                <img
                  src={item.item.pictureUrl}
                  width="100"
                  alt="item.item.title"
                />
                <p>
                  {item.item.title} x {item.qty} = ${item.item.price}
                </p>
                <Trash
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  <p>-</p>
                </Trash>
              </ItemDiv>
            );
          })}
      </ItemsDiv>
      {cartCount > 0 ? (
        <>
          <Total>Total: ${totalPrice} </Total>
          <Buttons onClick={clear}>
            <p>Vaciar carrito</p>
          </Buttons>
          <Form datos={datos} setDatos={setDatos} createOrder={createOrder} />
        </>
      ) : (
        <>
          <Message>No hay productos seleccionados</Message>
        </>
      )}
      {confirmacion && (
        <p>
          Código de confirmación de compra : <b>{confirmacion}</b>
        </p>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 800px;
  margin: 55px auto;
`;

const Buttons = styled(Button)`
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
  margin-top: 100px;
  p {
    color: white;
    text-decoration: none;
    text-transform: none;
    font-size: 16px;
  }
`;

const Trash = styled.button`
  background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
  border-radius: 60px;
  padding: 15px;
  cursor: pointer;

  p {
    color: white;
    font-size: 16px;
  }
`;

const Total = styled.b`
  margin: 20px auto;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  margin: 30px;
`;

const ItemsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Message = styled.p`
  margin: 40px 0;
`;
