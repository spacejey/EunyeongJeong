import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Components
import Woozu from '../../assets/woozu.gif'
import SnakeGame from '../../assets/snake-game.gif'
import Harvard from '../../assets/harvard-gallery.gif'
import RockGame from '../../assets/rock-game.gif'



const ToyProjects = () => {

  return (
    <>
      <Container className='card-index'>
        <Row style={{ marginTop: '100px' }}>

          {/* Rock Paper Scissor */}
          <Col>
            <Card.Text className='card-date'>FEBRARY 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://battle-with-alien.netlify.app/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={RockGame} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Battle with Alien</Card.Title>
                <Card.Text>
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
    </>
  )
}

export default ToyProjects