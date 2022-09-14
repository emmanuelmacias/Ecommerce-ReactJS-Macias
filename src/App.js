import React from "react";
import { ItemListContainer } from "./components/header/ItemListContainer";
import NavBar from "./components/header/NavBar";



function App() {
  
  const fraseHeader = "Somos Creadores de Bienestar";

  return (
    <>
    <NavBar />
    <ItemListContainer greeting={fraseHeader}/>
    </>
  );
}

export default App;