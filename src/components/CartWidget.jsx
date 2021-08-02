import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useCartContext } from './CartContext';
import styled from 'styled-components';

function CartWidget() {
  const { cartCount } = useCartContext();

  return (
    <StyledDiv>
      <IoCartOutline />
      {cartCount > 0 ? <Count>({cartCount})</Count> : <></>}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Count = styled.p`
  font-size: 22px;
`;

export default CartWidget;
