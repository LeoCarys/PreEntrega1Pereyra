import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import Camiseta1 from '../assets/Camiseta-01.png'

const ItemDetail = ({ productos }) => {
  const { id  } = useParams();

  const filterProducts = productos.filter((producto) => producto.id == id)

 return (
   <div>
    {filterProducts.map((p) =>{
      return(
        <div key={p.id}>
          <Card maxW='sm'>
  <CardBody>
        <Image
        src={Camiseta1}
        alt='Camiseta-01 G2'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{p.nombre}</Heading>
      <Text>
        {p.description}
      </Text>
      <Text>
        {p.category}
      </Text>
      {/* <Text color='blue.600' fontSize='2xl'>
        
      </Text> */}
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    {/* <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup> */}
        <ItemCount/>
    
  </CardFooter>
  </Card>
        </div>
      )

    }
     )}
   </div>
  )
}

export default ItemDetail