// Components
import Star from '../../assets/Star 1.png'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Interest = () => {
  return ( 
    <>
      <Row style={{ marginTop: '200px' }} className='interest-container'>
        <div className='interest'>
          <img style={{ width: 50, marginRight: 10 }} src={ Star } alt="" />
          <p style={{ fontSize: 35, fontWeight: 800 }}>What am I interested in...</p>
        </div>
        <Col>
          <h4 className='interest-title'>&#127912; Design</h4>
          <p>I am particularly interested in graphic design.
            Recently, <br />I started self-studying <br />&quot;Touch Designer&quot; 
            that can produce responsive graphics.</p></Col>
        <Col>
          <h4 className='interest-title'>&#127925; Music</h4>
          <p>Music is one of the big reasons <br />I chose England. 
            I like electronic music and alternative rock.</p></Col>
        <Col>
          <h4 className='interest-title'>&#127909; Film</h4>
          <p>Favorite film directors: Alejandro Jodorowsky, 
            Jean-Luc Godard, Gaspar Noé, Ari Aster. And I love to go to BFI.</p></Col>
        <Col>
          <h4 className='interest-title'>&#128064; Meme</h4>
          <p>With occasional ice breaking, memes have great potential.<br />I like silly things.</p></Col>
      </Row>
    </>
  )
}

export default Interest