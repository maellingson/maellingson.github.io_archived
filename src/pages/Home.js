import React from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import MainImg from "../assets/keyboard.jpg"


const Home = () => (
  <div>
    <Container>
      <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
          <h1 style={{ textAlign: 'center', marginTop: 40 }}><strong>Marissa Ellingson</strong></h1>
          <h5 style={{ textAlign: 'center' }}>Full Stack Web Developer | Technical Writer</h5>
        </Col>
        <Col size="md-2">
        </Col>
      </Row>

    </Container>

    <Jumbotron backgroundImage={MainImg}>
    </Jumbotron>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
          <p>
            Hello! I’m Marissa Ellingson and I am a full stack developer who recently graduated from the University of Minnesota’s Coding Bootcamp. <br>
            </br>
            <br></br>
            I have a passion for technology that I developed working in startups and established software companies. I have held customer service roles, facilitated workshops, developed excellent troubleshooting skills, created end-user and developer documentation, provided design input and tested new software features. I love learning about new technologies, solving problems, and collaborating with others who are as passionate as I am.<br>
            </br>
            <br></br>
            I recently continued my journey in the software industry by learning how to code. I enrolled in the University of Minnesota’s Coding Bootcamp and graduated with a foundation in several key coding languages and a drive to continue to learn and develop my skills.</p>
          <br>
          </br>
          <Row>
            <Col size="md-3">
            </Col>
            <Col size="md-6">
              <h2 style={{ marginTop: 20, marginBottom: 40, textAlign: 'center' }}>Technical Skills</h2>
              <ul style={{ fontSize: 25 }}>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>mySQL</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>

            </Col>
          </Row>




        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
