import React from 'react';

import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className='pepito'>

   
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
    
          </div>
  )
}

export default ItemList;
