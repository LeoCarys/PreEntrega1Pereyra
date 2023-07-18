import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex,  } from '@chakra-ui/react'
import React from 'react'


const CartWidget = () => {
  return (
    <Flex className='Carrito'>
        <Box p="2">
        <h4><StarIcon/> Carrito</h4>
        </Box>
        <Box p="2">
        <span>8</span>
        </Box>
    </Flex>
  )
}

export default CartWidget