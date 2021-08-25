import styled from 'styled-components';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ItemListContainer({ greeting }) {
  const [producto, setProducto] = useState([]);
  const { categoryID } = useParams();
  const [llamada, setLlamada] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const firestore = getFirestore();
      const collection = await firestore.collection('products');
      let query = await collection.get();

      let newArray = [];
      query.forEach((element) => {
        newArray.push(element.data());
      });
      setLlamada(newArray);
    };
    getProducts();
  }, []);

  useEffect(() => {
    let newArray = [];
    llamada.forEach((element) => {
      if (!categoryID) {
        newArray.push(element);
      } else {
        if (element.category === categoryID) {
          newArray.push(element);
        }
      }
    });
    setProducto(newArray);
  }, [categoryID, llamada]);

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
