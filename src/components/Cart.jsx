import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/ShoppingCartContext'
import { Link } from "react-router-dom"

const Cart = () => {

  const { cart, removeItem } = useContext(CartContext)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalCarrito = cart.reduce((acc, item) => (item.cantidad * item.price) + acc, 0);
    setTotal(totalCarrito)
  }, [cart])
  return (
    <>
      <div className='cart'>
        {cart.map(item => (
          <div className="cartItem">
            <div>{item.nombre}</div>
            <div>{item.price}</div>
            <div>{item.stock}</div>
            <div>{item.cantidad}</div>
            <img src={item.image}></img>
            <div>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="detalle">
        <p>Total: ${total}</p>
        <Link to={"/checkout"}>
          <button>Comprar</button></Link>
      </div>
    </>
  )
}

export default Cart