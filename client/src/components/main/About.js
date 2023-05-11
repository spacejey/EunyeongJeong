// Components
import Profile from '../../assets/Eunyeong_profile.png'
import Experience from './Experience'
import Interest from './Interest'
import NavBar from '../common/NavBar'
import Skills from '../main/Skills'
import Mail from '../../assets/mail_icon.png'
import LinkedIn from '../../assets/linkedin_icon.png'
import Github from '../../assets/github_icon.png'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


const About = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:eunyeong.jeong00@gmail.com'
  }

  const handleImageClick = (link) => {
    window.location.href = link
  } 
  return ( 
    <>
      <NavBar />
      <Container className='about-header'>
        <Row>
          <div className='profile'>
            <img src={ Profile } className='profile-img' />
          </div>
        </Row>
        <div className='about-text-container'>
          <Row className='about-main'>
            <Col>
              <p className='first-title'> ABOUT </p>
              <p className='sec-title'> EUNYEONG </p>
              <p>The name &apos;Eunyeong&apos; has the meaning of &apos;graceful and glorious&apos;.<br />
              I am a <span style={{ fontWeight: '700' }}>Junior Engineer </span> 
              dealing with <span style={{ fontWeight: '700' }}>Full stack</span></p>
            </Col>
            <Col className='buttons'>
              <img
                src={Mail}
                className='mail'
                onClick={() => handleEmailClick()}
                target="_blank"
              />
              <img
                src={LinkedIn}
                className='LinkedIn'
                onClick={() => handleImageClick('https://www.linkedin.com/in/eunyeong-jeong/')}
                target="_blank"
              />
              <img
                src={Github}
                className='Github'
                onClick={() => handleImageClick('https://github.com/spacejey')}
                target="_blank"
              />
            </Col>
          </Row>
          <Row className='about-text-long'>
            <Col>I&apos;m curious about the world. I&apos;ve always been passionate about technology, creativity and digital design.
              My passionate about design and the IT technology led me to London. Also my enthusiasm about
              programing has recently led me to complete an immersive software development course in London.
              I&apos;ve been living my life literally shouting 
            <span className='highlight'>&quot;Hello World!&quot;</span>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Interest />
        <Experience />
        <Skills />
      </Container>
    </>
  )
}

export default About