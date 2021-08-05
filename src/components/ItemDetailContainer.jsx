import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { getFirestore } from '../firebase';

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  let { productID } = useParams();

  useEffect(() => {
    const firestore = getFirestore();
    const collection = firestore.collection('products');
    let query = collection.doc(productID).get();

    query
      .then((doc) => {
        setProducto(doc.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productID]);

  return (
    <StyledDiv>
      {producto === undefined ? (
        <Spinner />
      ) : (
        <ItemDetail
          item={producto}
          key={producto.id}
          id={producto.id}
          name={producto.title}
          description={producto.description}
          price={producto.price}
          image={producto.pictureUrl}
          stock={producto.stock}
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
