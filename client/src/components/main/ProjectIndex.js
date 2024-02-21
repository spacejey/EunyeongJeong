// Components
import ProjectCard from './ProjectCard'
import ToyProjects from './ToyProjects'
import Footer from './Footer'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = () => {

  return (
    <>
      <Container className='nav-transition'>
        <Row>
          <Col style={{ 
            display: 'flex', 
            justifyContent: 'center',
            padding: '0',
          }}>
            <h1 className='project-title'> PROJECTS </h1>
          </Col>
        </Row>

        <Col>
          <ProjectCard />
        </Col>

        <Row>
          <Col style={{ 
            display: 'flex', 
            justifyContent: 'center',
            padding: '0',
          }}>
            <h1 className='project-title'> TOY PROJECTS </h1>
          </Col>
        </Row>
        
        <Col style={{ marginBottom: '100px' }}>
          <ToyProjects />
        </Col>

      </Container>
      <Footer />
    </>
  )
}

export default Projects