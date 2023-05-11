// Components
import HomeGraphic from './common/HomeGraphic'
import NavBar from '../components/common/NavBar'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 1110 })
  
  return (
    <main>
      <NavBar />
      <Row className='home-mobile-wrapper'>
      </Row>
      <Row className='nav-transition'>
        <Col className='home-text'>
          <h1 className='main-text'>
            I&apos;VE BEEN LIVING <br />
            MY LIFE LITERALLY <br />
            SHOUTING <br />
            ●●● <br />
            &quot;HELLO WORLD!&quot; <br />
          </h1>
          <h3 className='sub-text'>
            <span style={{ fontSize: '20px' }}>
              From <span className='hight-light'>Seoul </span> 
              to moving to <span className='hight-light'>London.</span><br />
              From <span className='hight-light'>Designer</span> to 
              <span className='hight-light'> Software engineer.</span></span>
            <br /><br />
            Welcome to the homepage of my journey.<br />
            Tell me your story too. Mail, LinkedIn and Coffee Chat are always welcome. <br />
          </h3>
        </Col>
      </Row>
      {!isMobile && (
        <Col>
          <HomeGraphic />
        </Col>
      )}
    </main>
  )
}

export default Home