import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

export default function ItemDetailContainer() {
  const [item, setItem] = useState();
  let { productID } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const items = await fetch('../JSON/productos.json');
      const respuesta = await items.json();

      respuesta.forEach((element) => {
        if (element.id === productID) {
          setItem(element);
          return;
        }
      });
    };

    setTimeout(() => {
      getItems();
    }, 1000);
  }, [productID]);
  return (
    <StyledDiv>
      {item === undefined ? (
        <Spinner />
      ) : (
        <ItemDetail
          item={item}
          key={item.id}
          id={item.id}
          name={item.title}
          description={item.description}
          price={item.price}
          image={item.pictureUrl}
          stock={item.stock}
        />
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
