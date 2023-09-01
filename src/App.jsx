import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartContext, ShoppingCartProvider } from './Context/ShoppingCartContext'

import Checkout from './components/Checkout'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlZlNQqNHlIClY4fuYcdMnoT05ToVQJJ4",
  authDomain: "leonardoecomerce-8bbbd.firebaseapp.com",
  projectId: "leonardoecomerce-8bbbd",
  storageBucket: "leonardoecomerce-8bbbd.appspot.com",
  messagingSenderId: "920505316653",
  appId: "1:920505316653:web:0f14b78adce6b1d3d80fa4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


const App = () => {
  return (

    <ShoppingCartProvider >


      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/checkout' element={<Checkout />} />

        </Routes>





      </BrowserRouter>

    </ShoppingCartProvider>
  )
}



export default App