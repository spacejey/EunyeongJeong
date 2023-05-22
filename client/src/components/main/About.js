// Components
import Profile from '../../assets/Eunyeong_profile.png'
import Experience from './Experience'
import Interest from './Interest'
import Skills from '../main/Skills'
import Mail from '../../assets/mail_icon.png'
import LinkedIn from '../../assets/linkedin_icon.png'
import Github from '../../assets/github_icon.png'
import Footer from './Footer'
import '../../styles/common/About.scss'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const About = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto:eunyeong.jeong00@gmail.com'
  }

  const handleImageClick = (link) => {
    window.location.href = link
  } 
  return ( 
    <>
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
              <p className='about-sub'>The name &apos;Eunyeong&apos; has the meaning of &apos;graceful and glorious&apos;.<br />
              And I&apos;m living up to my name, helping others, rejoicing in glory and love!<br />
              I am a <span style={{ fontWeight: '700' }}>Junior Engineer </span> 
              skilled in <span style={{ fontWeight: '700' }}>Full stack</span></p>
            </Col>
          </Row>
          <Col className='icons'>
            <img
              src={Mail}
              className='mail'
              onClick={() => handleEmailClick()}
              target="_blank"
              rel="noopener noreferrer"
            />
            <img
              src={LinkedIn}
              className='LinkedIn'
              onClick={() => handleImageClick('https://www.linkedin.com/in/eunyeong-jeong/')}
              target="_blank"
              rel="noopener noreferrer"
            />
            <img
              src={Github}
              className='Github'
              onClick={() => handleImageClick('https://github.com/spacejey')}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Col>
          <Row className='about-text-long'>
            <Col>I&apos;m curious about the world. I&apos;ve always been passionate about technology, creativity and digital design.
              My passion about design and the IT technology led me to London. Also my enthusiasm about
              programing has recently led me to complete an immersive software development course in London.
              I&apos;ve been living my life literally shouting &nbsp;
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
      <Footer />
    </>
  )
}

export default About