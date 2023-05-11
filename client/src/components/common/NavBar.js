import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Logo from '../../assets/Logo.png'

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container className='nav-bar-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href="/" className="my-logo">
              <img src={Logo} alt="" className="logo"/>
            </Navbar.Brand>
            <Nav.Link href="/about" className="my-link">
              <span style={{ fontWeight: 'bold' }}>About me ----------- <br /></span>
              From Seoul to London
            </Nav.Link>
            <Nav.Link href="/projects" className="my-link">
              What I&apos;ve done so far? <br />
              <span style={{ fontWeight: 'bold' }}>Projects -------------</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar