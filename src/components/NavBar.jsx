import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Spacer, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'



const NavBar = () => {
  return (
    <Flex>
        <Box p="2">
        <p className='Titulo'>Esports Shop</p>
        </Box>
        <Box>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Equipos
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      {/* <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/100/100'
        alt='Fluffybuns the destroyer'
        mr='12px'
      /> */}
      <span>G2 Esports</span>
    </MenuItem>
    <MenuItem minH='40px'>
      {/* <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/120/120'
        alt='Simon the pensive'
        mr='12px'
      /> */}
      <span>Fnatic</span>
    </MenuItem>
    <MenuItem minH='40px'>
      {/* <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://placekitten.com/120/120'
        alt='Simon the pensive'
        mr='12px'
      /> */}
      <span>9z</span>
    </MenuItem>
  </MenuList>
</Menu>
</Box>
<Spacer/>
<CartWidget/>
    </Flex>
  )
}

export default NavBar