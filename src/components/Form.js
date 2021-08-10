import styled from 'styled-components';

function Form({ datos, setDatos, createOrder }) {
  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h2>Completa el formulario para finalizar tu compra</h2>
      <Formulario onSubmit={enviarDatos}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          placeholder="Número"
          name="phone"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />

        <input type="submit" value="Terminar compra" onClick={createOrder} />
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
`;

export default Form;
