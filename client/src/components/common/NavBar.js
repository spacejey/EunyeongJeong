import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Logo from '../../assets/Logo.png'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect bg="white" expand="lg">
        <Container className='nav-bar-container'>
          <Navbar.Brand href="/" className="my-logo"><img src={Logo} alt="" className="logo"/></Navbar.Brand>
          <Navbar id="responsive-navbar-nav">
            <Nav className="nav">
              <Nav.Link href="/about" className="my-link">
                <span style={{ fontWeight: 'bold' }}>About me ----------- <br /></span>
                From Seoul to London
              </Nav.Link>
              <Nav.Link eventKey={4} href="/projects" className="my-link">
                What I&apos;ve done so far? <br />
                <span style={{ fontWeight: 'bold' }}>Projects -------------</span>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  )
  
}

export default NavBar