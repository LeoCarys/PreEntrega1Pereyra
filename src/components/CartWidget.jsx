import { Box, Flex,  } from '@chakra-ui/react'
import React from 'react'
import cart from '..//assets/shopping-cart.png'

const CartWidget = () => {
  return (
    <Flex className='Carrito'>
        <Box p="2">
        <h4><img src={cart} alt="Carrito imagen" width='50px' height='50px' /></h4>
        </Box>
        <Box p="2">
        <span>8</span>
        </Box>
    </Flex>
  )
}

export default CartWidget