// Components
import AboutGraphic from '../common/AboutGraphic'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useMediaQuery } from 'react-responsive'


const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 890 })

  return ( 
    <>
      <Container className='experience-container'>
        <Row>
          <Col className='experience'>
            <div className='experience-header' >
              <p className='first-title'> WORK </p>
              <p className='sec-title'> EXPERIENCE </p>
              <p style={{ fontSize: '17px', fontStyle: 'italic' }}>My career is started from Fashion
                Marketing to Software Engineering </p> 
            </div>
            <div className='experience-box'>
              <p className='experience-date'>Jan - Apr 2023</p>
              <p className='experience-title'>Software Engineering Immersive, Student, General Assembly, Remote</p>
              <p className='experience-skills'>Key Skills : Team Work, Organizational skills, Remote Work </p>
              <p className='experience-text'>
              &bull; Full-time full-stack software engineering course for 12 weeks. Solo and group projects with JavaScript, 
                Python, MongoDB, Django, etc. <br /></p>
            </div>
            <div className='experience-box'>
              <p className='experience-date'>Jun - Dec 2022</p>
              <p className='experience-title'>Stylist Assistant, All Saints, Camden, London</p>
              <p className='experience-skills'>Key Skills : Communication Skills, Time Management, Emotional Intelligence</p>
              <p className='experience-text'>
                &bull; I studied on various styling to provide recommendations that fit the
                customer&apos;s body types and moods, which also helped to boost sales. <br />
                &bull; Utilizing Fictional Media and Creating Content for Employees.</p>
            </div>
            <div className='experience-box'>
              <p className='experience-date'>Feb 2021 - Feb 2022</p>
              <p className='experience-title'>Merchandiser, LF Fashion, Seoul, Korea</p>
              <p className='experience-skills'>Key Skills : Excel, Photoshop, Communication Skills, Time Management</p>
              <p className='experience-text'>
                &bull; Selection/planning of the monthly target amount as an in-house sales
                  analysis indicator. I achieved 30.4k in sales during Jun 2021, and it went
                  on to achieve 100.2K in sales in Oct 2021. <br />
                &bull; Managed Live commerce for the largest fashion platform in Korea called &quot;NAVER&quot;</p>
            </div>
            <div className='experience-box'>
              <p className='experience-date'>Oct 2019 - Nov 2020</p>
              <p className='experience-title'>Marketing Manager, TchaiKim, Seoul, Korea</p>
              <p className='experience-skills'>Key Skills : Photoshop, Excel, Communication Skills, Problem-Solving, Self-Learning</p>
              <p className='experience-text'>
                &bull; Managed Live commerce for sample sale. 120% increase in sales over the previous year. <br />
                &bull; Requested/published a collaboration pictorial with a k-pop celebrity from the Vogue Korea photoshoot team.<br />
                &bull; Creating campaigns or promotions including marketing copy, digital assets to focused on encouraging communication with consumers.
              </p>
            </div>
          </Col>
          {!isMobile && (
            <Col>
              <AboutGraphic />
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

export default Experience