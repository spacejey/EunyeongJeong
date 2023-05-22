// Components
import Star from '../../assets/Star 1.png'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Interest = () => {
  return ( 
    <>
      <Row className='interest-container'>
        <div className='interest'>
          <img style={{ width: 50, marginRight: 10 }} src={ Star } alt="" />
          <p className='interest-title'>What am I interested in...</p>
        </div>
        <Col xs={12} md={3} className='interest-asset'>
          <h4 className='interest-asset-title'>&#127912; Design</h4>
          <p>I am particularly interested in graphic design.
            Recently, <br />I started self-studying <br />&quot;Touch Designer&quot; 
            that can produce responsive graphics.</p></Col>
        <Col xs={12} md={3} className='interest-asset'>
          <h4 className='interest-asset-title'>&#127925; Music</h4>
          <p>Music is one of the big reasons <br />I chose England. 
            I like electronic music and alternative rock.</p></Col>
        <Col xs={12} md={3} className='interest-asset'>
          <h4 className='interest-asset-title'>&#127909; Film</h4>
          <p>Favorite film directors: Alejandro Jodorowsky, 
            Jean-Luc Godard, Gaspar Noé, Ari Aster. And I love to go to BFI.</p></Col>
        <Col xs={12} md={3} className='interest-asset'>
          <h4 className='interest-asset-title'>&#128064; Meme</h4>
          <p>With occasional ice breaking, memes have great potential.<br />I LOVE silly things.</p></Col>
      </Row>
    </>
  )
}

export default Interest