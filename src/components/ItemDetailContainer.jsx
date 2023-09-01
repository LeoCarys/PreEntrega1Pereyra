import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Camiseta1 from '../assets/Camiseta-01.png'
import Camiseta2 from '../assets/Camiseta-02.png'
import { app } from '../App'
import { getDocs, collection, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {

  // const productos = [
  //   { id: 1, nombre:"Producto A", image: Camiseta1, price: 1000, description: "Descripcion del Producto A", stock: 5, category: "cat1" }, 
  //   { id: 2, nombre:"Producto B", image: Camiseta1, price: 1000, description: "Descripcion del Producto B", stock: 5, category: "cat2" },
  //   { id: 3, nombre:"Producto C", image: Camiseta1, price: 1000, description: "Descripcion del Producto C", stock: 5, category: "cat3" },
  //   { id: 4, nombre:"Producto D", image: Camiseta2, price: 1000, description: "Descripcion del Producto D", stock: 5, category: "cat1" },
  //   { id: 5, nombre:"Producto E", image: Camiseta1, price: 1000, description: "Descripcion del Producto E", stock: 5, category: "cat2" },
  //   { id: 6, nombre:"Producto F", image: Camiseta1, price: 1000, description: "Descripcion del Producto F", stock: 5, category: "cat3" },
  //   { id: 7, nombre:"Producto G", image: Camiseta1, price: 1000, description: "Descripcion del Producto G", stock: 5, category: "cat1" },
  //   { id: 8, nombre:"Producto H", image: Camiseta1, price: 1000, description: "Descripcion del Producto H", stock: 5, category: "cat2" },
  //   { id: 9, nombre:"Producto I", image: Camiseta1, price: 1000, description: "Descripcion del Producto I", stock: 5, category: "cat3" },
  //   { id: 10, nombre:"Producto 10", image: Camiseta1, price: 1000 ,description: "Descripcion del Producto 10", stock: 5, category: "cat1" },
  //   { id: 11, nombre:"Producto 11", image: Camiseta1, price: 1000, description: "Descripcion del Producto 11", stock: 5, category: "cat1" },
  //   { id: 12, nombre:"Producto 12", image: Camiseta1, price: 1000, description: "Descripcion del Producto 12", stock: 5, category: "cat1" },


  // ]

  const [productos, setProductos] = useState([])
  const [loader, setLoader] = useState(true)
  const db = getFirestore(app)

  useEffect(() => {
    getDocs(collection(db, "productos"))
      .then(snapshot => {
        const docs = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        setProductos(docs)
      }).finally(() => setLoader(false))
  }, [])

  // const getProductos = new Promise((resolve, reject) =>{
  //   if(productos.length > 0){
  //     setTimeout(()=>{
  //       resolve(productos)
  //     }, 2000)
  //   } else {
  //     reject (new Error("No hay Datos"))
  //   }
  // })

  // getProductos
  // .then((res)=> {
  // })
  // .catch((error)=>{
  //   console.log(error)
  // })



  return (
    <>
      {loader
        ? "Cargando contenido ..."
        : <ItemDetail productos={productos} />
      }

    </>
  )
}

export default ItemDetailContainer