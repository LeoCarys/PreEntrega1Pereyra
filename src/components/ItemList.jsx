import React from 'react';
import { Stack } from '@chakra-ui/react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <Stack spacing="4" direction="column" align="center">
      {productos.map((p) => {
        return(
               <Item
                 key={p.id}
                 id={p.id}
                 nombre={p.nombre}
                 description={p.description}
                 stock={p.stock}
                 image={p.image}
                 pricce={p.price}
        />
      )
      })
    }
    </Stack>
  )
}

export default ItemList;
