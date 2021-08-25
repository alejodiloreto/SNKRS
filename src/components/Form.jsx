import { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

function Form({ createOrder }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');

  const verificarDatos = () => {
    let RegExPhone = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    let RegExName = /^[a-z ,.'-]+$/i;
    let RegExEmail = /\S+@\S+\.\S+/;

    if (
      RegExName.test(name) &&
      RegExPhone.test(phone) &&
      RegExEmail.test(email) &&
      email2 === email
    ) {
      createOrder({ name, phone, email });
    }
  };

  return (
    <Container>
      <h2>Completa el formulario para finalizar tu compra</h2>
      <Formulario
        onSubmit={(e) => {
          e.preventDefault();
          verificarDatos();
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="tel"
          placeholder="Número"
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          type="email"
          placeholder="Repite tu email"
          name="email"
          onChange={(e) => {
            setEmail2(e.target.value);
          }}
          required
        />
        <Button type="submit">
          <p>Terminar compra</p>
        </Button>
      </Formulario>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 400px;
    padding: 10px;
    margin: 0 auto;
    margin-top: 15px;
    border: 0;
    border-bottom: 1px solid grey;
    outline: none;
  }

  Button {
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    background: linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
    p {
      color: white;
      text-transform: none;
      font-size: 16px;
    }

    &:disabled {
      background: #b1b1b1;
    }
  }
`;
export default Form;
