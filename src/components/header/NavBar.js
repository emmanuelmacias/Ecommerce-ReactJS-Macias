import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo-small.png'
import { CartWidget } from './CartWidget';

const NavBar= () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#category">Categorias</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <CartWidget/> {/* CONTAINER DEL CARRO DE COMPRAS */}
        </Container>
      </Navbar>
    </>
    )
}

export default NavBar;