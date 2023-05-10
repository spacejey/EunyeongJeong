import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

// Components
import Woozu from '../../assets/woozu.gif'
import SnakeGame from '../../assets/snake-game.gif'
import Harvard from '../../assets/harvard-gallery.gif'



const ProjectsCard = () => {

  return (
    <>
      <Container>
        <Row style={{ marginTop: '100px' }}>
          {/* STAY COOL */}
          <Col className='card-indivisual'>
            <Card.Text className='card-date'>APRIL 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://staycool.herokuapp.com/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img' variant="top" src={SnakeGame} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>STAY COOL</Card.Title>
                <Card.Text>
                Full-stack Ice cream truck tracking app by utilising the Django REST
                Framework and PostgreSQL. The frontend is builded by React and SCSS,
                and map was inserted using Google Cloud API.
                </Card.Text>
              </Card.Body>
            </Card>
            <div>
              {['Django', 'PostgeSQL', 'React', 'SASS'].map((tech, index) => (
                <Badge key={index} pill bg='warning' text='dark' style={{ marginRight: '10px' }}>
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>

          {/* Woozu Sound */}
          <Col>
            <Card.Text className='card-date'>MARCH 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://woozu-sounds.herokuapp.com/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={Woozu} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Woozu Sounds</Card.Title>
                <Card.Text>
                Full-stack music festival website based on MERN. Each of us was
                responsible for developing our own music stage. We used Express.js to
                handle the Mongo database and alternatives CRUD operations.
                </Card.Text>
              </Card.Body>
            </Card>
            <div>
              {['MERN framework', 'SASS'].map((tech, index) => (
                <Badge key={index} pill bg='warning' text='dark' style={{ marginRight: '10px' }}>
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>

          {/* Harvard Gallery */}
          <Col>
            <Card.Text className='card-date'>FEBRARY 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://spacejey-harvard-api.netlify.app/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={Harvard} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Harvard Gallery</Card.Title>
                <Card.Text>
                Web page where users can view artworks. We used the API released by the
                Harvard Gallery and used React as front end. As I am strong in design, I was
                responsible for all the design using Bootstrap and SCSS.
                </Card.Text>
              </Card.Body>
            </Card>
            <div>
              {['React', 'API', 'SCSS'].map((tech, index) => (
                <Badge key={index} pill bg='warning' text='dark' style={{ marginRight: '10px' }}>
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>

          {/* Snake Game */}
          <Col>
            <Card.Text className='card-date'>FEBRARY 2023</Card.Text>
            <Card style={{ width: '18rem' }}>
              <Link to={'https://spacejey.github.io/SEI-PROJECT1/'} target="_blank" rel="noopener noreferrer">
                <Card.Img  className='card-img'  variant="top" src={SnakeGame} />
              </Link>
            </Card>
            <Card className='card-text-box'>
              <Card.Body className='card-text-body'>
                <Card.Title>Snake Game</Card.Title>
                <Card.Text>
                This is my first solo project made using JavaScript. 
                I adjusted the speed of the moving snake with
                &quot;setInterval&quot; and gave the &quot;keyCode&quot; effect.
                </Card.Text>
              </Card.Body>
            </Card>
            <div>
              {['JavaScript', 'CSS'].map((tech, index) => (
                <Badge key={index} pill bg='warning' text='dark' style={{ marginRight: '10px' }}>
                  {tech}
                </Badge>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default ProjectsCard