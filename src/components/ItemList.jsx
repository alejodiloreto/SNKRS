import React, { useState, useEffect } from 'react';
import Item from './Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

export default function ItemList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      let productos = await fetch('../JSON/productos.json');
      let respuesta = await productos.json();
      setData(respuesta);
    };
    setTimeout(() => {
      getProductos();
    }, 2000);
  }, []);

  return (
    <StyledDiv>
      {data.length === 0 ? (
        <Spinner />
      ) : (
        data.map((element) => {
          return (
            <Item
              key={element.id}
              id={element.id}
              name={element.title}
              price={element.price}
              image={element.pictureUrl}
              stock={element.stock}
            />
          );
        })
      )}
    </StyledDiv>
  );
}

const Spinner = styled(CircularProgress)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
