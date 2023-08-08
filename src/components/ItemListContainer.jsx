
import React from 'react'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const {category} = useParams()
  const productos = [
    { id: 1, nombre:"Producto A", description: "Descripcion del Producto A", stock: 5, category: "cat1" },
    { id: 2, nombre:"Producto B", description: "Descripcion del Producto B", stock: 51, category: "cat2" },
    { id: 3, nombre:"Producto C", description: "Descripcion del Producto C", stock: 52, category: "cat3" },
    { id: 4, nombre:"Producto D", description: "Descripcion del Producto D", stock: 53, category: "cat1" },
    { id: 5, nombre:"Producto E", description: "Descripcion del Producto E", stock: 54, category: "cat2" },
    { id: 6, nombre:"Producto F", description: "Descripcion del Producto F", stock: 55, category: "cat3" },
    { id: 7, nombre:"Producto G", description: "Descripcion del Producto G", stock: 56, category: "cat1" },
    { id: 8, nombre:"Producto H", description: "Descripcion del Producto H", stock: 57, category: "cat2" },
    { id: 9, nombre:"Producto I", description: "Descripcion del Producto I", stock: 58, category: "cat3" },

  ]
  const getProductos = new Promise((resolve, reject) =>{
    if(productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      }, 2000)
    } else {
      reject (new Error("No hay Datos"))
    }
  })

  getProductos
  .then((res)=> {
  })
  .catch((error)=>{
    console.log(error)
  })

  const filterProducts = productos.filter((producto) => producto.category === category)
  
  
  
  
  
  return (
      <Center p='1rem'>
      <ItemList productos={filterProducts}
      />
      </Center>

  )
}

export default ItemListContainer