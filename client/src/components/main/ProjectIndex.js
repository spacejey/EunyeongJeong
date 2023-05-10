// Components
import axios from 'axios'
import ProjectCard from './ProjectCard'
import NavBar from '../common/NavBar'
import { useCallback, useEffect, useState } from 'react'


// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = () => {


  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className='project-title'> PROJECTS </h1>
          </Col>
        </Row>
        <Col style={{ marginBottom: '100px' }}>
          <ProjectCard />
        </Col>
      </Container>
    </>
  )
}

export default Projects