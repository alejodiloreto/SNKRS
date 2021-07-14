import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';

export default function ItemListContainer({ greeting }) {
  return (
    <StyledDiv>
      <Greeting>{greeting}</Greeting>
      <ItemList />
    </StyledDiv>
  );
}

const Greeting = styled.h1`
  text-align: center;
  margin-top: 40px;
`;

const StyledDiv = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
