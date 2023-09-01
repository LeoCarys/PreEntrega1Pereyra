import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';


const ItemCount = ({ producto }) => {

  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < producto.stock) {
      setContador(contador + 1)

    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);

    }
  };
  const [prodcutoAgregar, setProductoAgregar] = useState();

  useEffect(() => {
    const cantidad = contador
    setProductoAgregar({ ...producto, cantidad })
  }, [contador])


  const { addToCart } = useContext(CartContext)






  return (
    <div className="item-count-card">
      <button className="item-count-button" onClick={restar}>
        -
      </button>
      <div className="item-count-number">{contador}</div>
      <button className="item-count-button" onClick={sumar}>
        +
      </button>
      <button className='item-count-add' onClick={() => addToCart(prodcutoAgregar)}>
        Agregar Carrito
      </button>


    </div>
  );
};

export default ItemCount;
