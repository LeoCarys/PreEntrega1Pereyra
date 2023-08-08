import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Spacer, Box } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <Flex>
        <Box p="2">
          <Link to={"/"}>
        <p className='Titulo'>Esports Shop</p>
          </Link>
        </Box>
        <Box>
        <Menu>
  <MenuButton colorScheme='red' as={Button} rightIcon={<ChevronDownIcon />}>
    Equipos
  </MenuButton>
  <MenuList>
    <Link to={`/category/${'cat1'}`}>
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
      </Link>
     <Link to={`/category/${'cat2'}`}>
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
      </Link>
      <Link to={`/category/${'cat3'}`}>
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
      </Link>
  </MenuList>
</Menu>
</Box>
<Spacer/>
<Link to={"/cart"}>
<CartWidget/>
</Link>
    </Flex>
  )
}

export default NavBar