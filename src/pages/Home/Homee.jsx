import { Col, Container, Row } from 'react-bootstrap'
import Naavaar from '../../combnits/nav/Navaar'
import React from 'react'
import Hero from '../../Assetes/970d4c_3217d05ab1c542b593c7c49bcaa19d9f~mv2.png'; 

const Homee = () => {
  return (
    <div>
      <Naavaar/>
      <Container className='cont'>
        <Row className='Hero' > 
          <Col data-aos="zoom-in" className='imge' md={12} sm={12}>
          <img src={Hero}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homee