import Item from './Item';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

export default function ItemList({ producto }) {
  return (
    <StyledDiv>
      {producto.length === 0 ? (
        <Spinner />
      ) : (
        producto.map((element) => {
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
