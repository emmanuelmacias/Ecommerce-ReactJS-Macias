import React from "react";
import { ItemListContainer } from "./components/header/ItemListContainer";
import NavBar from "./components/header/NavBar";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";


function App() {
  
  const fraseHeader = "Somos Creadores de Bienestar";

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={fraseHeader}/>
    <ItemDetailContainer />
    </>
  );
}

export default App;