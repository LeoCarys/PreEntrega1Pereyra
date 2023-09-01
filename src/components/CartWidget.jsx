import React, { useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import { Box, Flex } from '@chakra-ui/react';
import cartImg from '../assets/shopping-cart.png';

const CartWidget = () => {

  const { cantidad } = useContext(CartContext)

  return (
    <Flex className='Carrito'>
      <Box p="2">
        <h4><img src={cartImg} alt="Carrito imagen" width='50px' height='50px' /></h4>
      </Box>
      <Box p="2">
        <span>{cantidad}</span>
      </Box>
    </Flex>
  );
};

export default CartWidget;
