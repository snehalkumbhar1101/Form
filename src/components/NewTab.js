import React from 'react'
import { Row, Col } from 'react-bootstrap'

function NewTab(_name, _gender, _country, _desc) {
  const data = JSON.parse(localStorage.getItem('items'))
  
  return (
    <Row className='p-4 justify-content-md-center'>
      <Col md={10} xs={12}>
        
       <h4>Welcome, {data.name}</h4>
       <h4>Country: {data.country}</h4>
       <h4>Gender : {data.gender}</h4>
       <h4>Comment : {data.desc}</h4>
      </Col>
    </Row>
  )
}

export default NewTab