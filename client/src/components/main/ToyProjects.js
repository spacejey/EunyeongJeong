import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Components
import RockGame from '../../assets/rock-game.gif'
import Quiz from '../../assets/quizzle-eye.gif'



const ToyProjects = () => {

  return (
    <div className='project-toy'>
      <Container className='card-index'>
        <Row className='card-container'>

          {/* Quizzle-eye */}
          <Col className='card-indivisual'>
            <div className='card-top'>
              <Card.Text className='card-date'>JUNE 2023</Card.Text>
            </div>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://quizzle-eye.netlify.app/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={Quiz} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Quizzle-eye !</Card.Title>
                <Card.Text className='card-text'>
                This is a quiz game application designed to enhance your understanding of router-dom, useState, and useEffect. 
                Users can select multiple choices and earn 10 points for each question.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='stack-container'>
              {['React', 'SASS'].map((tech, index) => (
                <p key={index} className='stack-badge'>
                  {tech}
                </p>
              ))}
            </div>
          </Col>
          {/* Rock Paper Scissor */}
          <Col className='card-indivisual'>
            <div className='card-top'>
              <Card.Text className='card-date'>FEBRARY 2023</Card.Text>
            </div>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://battle-with-alien.netlify.app/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={RockGame} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Battle with Alien</Card.Title>
                <Card.Text className='card-text'>
                A rock-paper-scissors game made using React Hooks. 
                By using useState and useEffect together, 
                the desired action is performed according to the state change of the component.
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='stack-container'>
              {['React', 'CSS'].map((tech, index) => (
                <p key={index} className='stack-badge'>
                  {tech}
                </p>
              ))}
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default ToyProjects