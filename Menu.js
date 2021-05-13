import React from 'react'
import {Navbar  , FormControl , Button, Nav , Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Menu(){
    return (
        <div >
         <Navbar bg="white" expand="lg">
         <Navbar.Brand href="/">Нүүр</Navbar.Brand>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/bid">Бидний тухай</Nav.Link>
      <Nav.Link href="#home">Түгээмэл асуултууд</Nav.Link>
      <Nav.Link href="/holbogdoh">Холбогдох</Nav.Link>
      <Nav.Link href="#link">Мэдээ</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
      
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
    
}