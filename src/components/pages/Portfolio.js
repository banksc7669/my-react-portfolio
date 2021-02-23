import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import noteTaker from '../public/Images/noteTaker.png';
import gameGuide from '../public/Images/gameGuide.jpg';
import expressHandlebarsApp from '../public/Images/expressHandlebars.jpg'

function Portfolio() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><h1 id="contact-me" class="display-4 cursive-font">Select Projects</h1><hr></hr></Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '20rem', height: '100%' }}>
                            <Card.Img variant="top" src={gameGuide} width="250" height="170" />
                            <Card.Body>
                                <Card.Title id="highlightGreen">Game Guide App</Card.Title>
                                <Card.Text>
                                    Team project where the user can get the latest stats on soccer matches, teams, and
                                    players.
                                    It will then provide the user with the upcoming matches, soccer clubs, soccer players,
                                    and highlights. I assisted with the
                                    JQuery/Javascript and designed the user interface utilizing
                                    the Bulma CSS framework.
                </Card.Text>
                                <br></br>
                            </Card.Body>
                            <a href="https://bcummings32.github.io/Project-1-Soccer-Scores/" target="_blank" class="btn btn-primary">See App</a>
                            <a href="https://github.com/Bcummings32/Project-1-Soccer-Scores" target="_blank" class="btn btn-primary">See Code</a>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem', height: '100%' }}>
                            <Card.Img variant="top" src={noteTaker} width="250" height="170" />
                            <Card.Body>
                                <Card.Title id="highlightPink">Note Taker</Card.Title>
                                <Card.Text>
                                    The Note Taker is built for a user who wants to write and save notes,
                                    which will persist in the application until the user decides to delete them.
                                    This application uses HTML, CSS, JavaScript, JQuery, nodeJS, and express.
                </Card.Text>
                            </Card.Body>
                            <a href="https://frozen-fortress-09251.herokuapp.com/#" target="_blank" class="btn btn-primary">See App</a>
                            <a href="https://github.com/banksc7669/Note-Taker/" target="_blank" class="btn btn-primary">See Code</a>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem', height: '100%' }}>
                            <Card.Img variant="top" src={expressHandlebars} width="250" height="170" />
                            <Card.Body>
                                <Card.Title id="highlightBlue">Eat DA Burger</Card.Title>
                                <Card.Text>
                                    As a developer I want to generate a webpage that allows you to order, add, delete, and devour burgers.
                                    App utilizes handlebars and models.

                                    This assignment allow me to create a web base burger logger with MySQL, Node, Express,
                                    Handlebars and a homemade ORM (yum!). The goal was to follow the MVC design pattern;
                                    use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.
                </Card.Text>
                                <br></br>
                            </Card.Body>
                            <a href="https://banksc7669.github.io/semantic-assignment/" target="_blank" class="btn btn-primary">See App</a>
                            <a href="https://banksc7669.github.io/semantic-assignment/" target="_blank" class="btn btn-primary">See Code</a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Portfolio;