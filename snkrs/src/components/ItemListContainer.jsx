import React from 'react';
import styled from 'styled-components';

export default function ItemListContainer({ greeting }) {
  return <Greeting>{greeting}</Greeting>;
}

const Greeting = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
