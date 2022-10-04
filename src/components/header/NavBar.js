import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo-small.png'
import { CartWidget } from './CartWidget';
import { Link} from 'react-router-dom';
import { NavCat } from './NavCat'

const NavBar = () => {


  return (
      <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={'/'}><Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand></Link>
          <Link to={'/'}>Home</Link>
          <NavCat/>
          <Link to={'/cart'}><CartWidget/></Link> {/* CONTAINER DEL CARRO DE COMPRAS */}
      </Container>
    </Navbar>
  </>
  )
}

export default NavBar;