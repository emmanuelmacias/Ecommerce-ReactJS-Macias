import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/header/ItemListContainer";
import NavBar from "./components/header/NavBar";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Cart } from "./components/CartView/Cart";


function App() {
  
  const fraseHeader = "Somos Creadores de Bienestar";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={fraseHeader}/> } />
          <Route path='/:id' element={ <ItemListContainer greeting={fraseHeader}/> } />
          <Route path='/product/:id' element={ <ItemDetailContainer /> }/>
          <Route path='/cart' element={ <Cart/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

