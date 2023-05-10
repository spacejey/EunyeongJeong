import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container className='nav-bar-container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about" className="my-link">
              <span style={{ fontWeight: 'bold' }}>About me ----------- <br /></span>
              From Seoul to London
            </Nav.Link>
            <Nav.Link href="/projects" className="my-link">
              What I&apos;ve done so far? <br />
              <span style={{ fontWeight: 'bold' }}>Projects -------------</span>
            </Nav.Link>
            {/* <Nav.Link href="/contact" className="my-link">
              <span style={{ fontWeight: 'bold' }}>Contact --------------- <br /></span>
              Welecome for everyone!
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <div className='logo-circle'>
          <Navbar.Brand href="/" className="my-logo">
            EUNYEONG <br />JEONG
          </Navbar.Brand>
          <svg width="30" height="50">
            <ellipse cx="50" cy="35" rx="11" ry="22" fill="black" transform="translate(-35, -10)" />
          </svg>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar