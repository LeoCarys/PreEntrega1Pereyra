import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Spacer, Box, Image } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import G2icon from '../assets/g2-icon.jpg'
import Fnaticicon from '../assets/fnatic-icon.png'
import KoiIcon from '../assets/koiicon.webp'



const NavBar = () => {
  return (
    
    <Flex className='NavBar'>
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
                <Image
        boxSize='2rem'
        borderRadius='full'
        src={G2icon}
        alt='Fluffybuns the destroyer'
        mr='12px'
      /> 
                <span>G2 Esports</span>
              </MenuItem>
            </Link>
            <Link to={`/category/${'cat2'}`}>
              <MenuItem minH='40px'>
             <Image
        boxSize='2rem'
        borderRadius='full'
        src={Fnaticicon}
        alt='Simon the pensive'
        mr='12px'
      /> 
                <span>Fnatic</span>
              </MenuItem>
            </Link>
            <Link to={`/category/${'cat3'}`}>
              <MenuItem minH='40px'>
                  <Image
        boxSize='2rem'
        borderRadius='full'
        src={KoiIcon}
        alt='Simon the pensive'
        mr='12px'
      />  
                <span>Koi</span>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </Flex>
  )
}

export default NavBar