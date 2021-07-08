import React from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';

export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <Greeting>{greeting}</Greeting>
      <ItemCount />
    </div>
  );
}

const Greeting = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
