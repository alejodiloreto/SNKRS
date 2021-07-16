import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const [item, SetItem] = useState();

  useEffect(() => {
    const getItems = async () => {
      const items = await fetch('../JSON/productos.json');
      const respuesta = await items.json();
      SetItem(respuesta[0]);
    };
    setTimeout(() => {
      getItems();
    }, 2000);
  }, []);

  return (
    <div>
      {item === undefined ? (
        ''
      ) : (
        <ItemDetail
          key={item.id}
          name={item.title}
          description={item.description}
          price={item.price}
          image={item.pictureUrl}
          stock={item.stock}
        />
      )}
    </div>
  );
}
