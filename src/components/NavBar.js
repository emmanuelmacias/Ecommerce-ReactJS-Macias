import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo-small.png'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export const Header = () => {
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
          <ShoppingCartTwoToneIcon color="success" fontSize="medium"/>
        </Container>
      </Navbar>
    </>
    )
}

export default Header;