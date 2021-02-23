import React from "react";
import resume from "../../images/resume-pic.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Resume from '../../images/ChristopherBanks-WebDevelopmentResume.pdf'

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
              <a href={Resume} download="Resume" class="btn btn-outline-primary">Download PDF</a>
            </Card.Body>
          </Card>
        </Col>

        <Col class="col-7">
          <Card class="homeCardBody p-2">
            <h5 class="cursive-font highlightText">Email</h5>
            <p>banksc7669@gmail.com</p>
            <h5 class="cursive-font highlightText">Phone</h5>
            <p>(919) 724-3713</p>
            <h5 class="cursive-font highlightText">Professional Networks</h5>
            <div>
              <a href="https://www.linkedin.com/in/christopher-banks-bb500257/" target="_blank" class="fa fa-linkedin "></a> 
              <a href="https://github.com/banksc7669" target="_blank" class="fa fa-github"></a> 
            </div>
          </Card>
        </Col>
     </Row>
  </Container>
  );
}

export default Contact;
