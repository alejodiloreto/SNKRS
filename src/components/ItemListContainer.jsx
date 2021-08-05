import styled from 'styled-components';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ItemListContainer({ greeting }) {
  const [producto, setProducto] = useState([]);
  let { productID } = useParams();

  useEffect(() => {
    const firestore = getFirestore();
    const collection = firestore.collection('products');

    if (productID === undefined) {
      const query = collection.get();
      query
        .then((resultado) => {
          const documentos = resultado.docs;
          const productos = documentos.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducto(productos);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let query = collection.where('categoryID', '==', productID);
      query = query.get();
      query
        .then((resultado) => {
          const documentos = resultado.docs;
          const productos = documentos.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducto(productos);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [productID]);

  return (
    <Container>
      <Greeting>{greeting}</Greeting>
      <ItemList producto={producto} />
    </Container>
  );
}

const Greeting = styled.h1`
  text-align: center;
  margin-top: 40px;
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;
