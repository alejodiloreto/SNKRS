import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from './Item';
import styled from 'styled-components';

export default function CategoryFilter() {
  const [categories, setCategories] = useState([]);
  let { categoryID } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const items = await fetch('/JSON/productos.json');
      const respuesta = await items.json();

      let filtrado = respuesta.filter(
        (product) => product.category === categoryID
      );
      setCategories(filtrado);
    };
    getItems();
  }, [categoryID]);

  return (
    <StyledDiv>
      {categories.map((element) => {
        return (
          <Item
            key={element.id}
            id={element.id}
            name={element.title}
            description={element.description}
            price={element.price}
            image={element.pictureUrl}
            stock={element.stock}
            category={element.category}
          />
        );
      })}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
