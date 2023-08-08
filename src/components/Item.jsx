import React from 'react'
import Camiseta1 from '../assets/Camiseta-01.png'
import { Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({
    id,
    nombre,
    description,  
    category,
}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={Camiseta1}
      alt='Camiseta-01 G2'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {category}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        <Link to={`/item/${id}`}>
        Detalles
        </Link>
      </Button>
      <Button variant='ghost' colorScheme='blue'>
       
      </Button>
    </ButtonGroup>
  </CardFooter>

</Card>

  )
}

export default Item