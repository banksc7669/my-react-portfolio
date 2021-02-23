import React from "react";
import resume from "../public/Images/resume.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Resume from '../public/Images/resume.jpg'

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 id="contact-me" class="display-4 cursive-font">Contact Me!</h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col class="col-4">
          <Card style={{ width: '20rem' }} class="homeCardBody p-2" >
            <Card.Img variant="top" src={resume} />
            <Card.Body>
              <Card.Title>My Resume</Card.Title>
              <a href={Resume} download="Resume" class="btn btn-outline-primary">Download jpg</a>
            </Card.Body>
          </Card>
        </Col>

        <Col class="col-7">
          <Card class="homeCardBody p-2">
            <h5 class="cursive-font highlightText">Email</h5>
            <p>richardwalter515@gmail.com</p>
            <h5 class="cursive-font highlightText">Phone</h5>
            <p>(336) 264-4558</p>
            <h5 class="cursive-font highlightText">Professional Networks</h5>
            <div>
              <a href="https://www.linkedin.com/in/richard-walter-0bb141121/" target="_blank" class="fa fa-linkedin "></a> 
              <a href="https://github.com/richardwalter515" target="_blank" class="fa fa-github"></a> 
            </div>
          </Card>
        </Col>
     </Row>
  </Container>
  );
}

export default Contact;