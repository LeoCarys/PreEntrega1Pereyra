import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text, SimpleGrid } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({ productos }) => {
  const { id  } = useParams();

  const filterProducts = productos.filter((producto) => producto.id == id)
  
  
 return (
  
   <div className='container-detail'>
    {filterProducts.map((p) =>{
      return(
        <div key={p.id}>
          <Card maxW='sm'>
  <CardBody>
        <Image
        src={p.image}
        alt='Camiseta-01 G2'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{p.nombre}</Heading>
      <Text>
        {p.description}
      </Text>
     
      <Text color='blue.600' fontSize='2xl'>
        ${p.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
  <ItemCount producto={p}/>
     <ButtonGroup spacing='2'>
      
      <Link to={"/cart"}>
      <Button variant='ghost' colorScheme='blue'>
        Finalizar Compra
      </Button>
      </Link>
    </ButtonGroup> 
    
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