import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const Contact = () => (
    <div>
    <Container>
      <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
          <h1 style={{marginTop: 40, textAlign: 'center', justifyContent: 'center', marginBottom: 20}}><strong>Contact</strong></h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-3">
        <img src="https://avatars1.githubusercontent.com/u/35227935?s=460&v=4" style={{width:'250px', height:'250px', padding: '20px'}}></img>

        </Col>
        <Col size="md-9">
          <p className='clearfix'>
            <h3>Interested in collaborating on a project? Lets connect!</h3> 
            <br></br>
            <br></br>
            <h4>Connect on LinkedIn:<a href="https://www.linkedin.com/in/marissa-ellingson"> Marissa Ellingson</a></h4>
            <br></br>
            <h4>Check out projects on Github: <a href="https://github.com/maellingson">maellingson</a></h4>
            <br></br>
            <h4>Send me an email: <a href= "marissa.ellingson@gmail.com">marissa.ellingson@gmail.com</a></h4>
            

          </p>

        </Col>
      </Row>
    </Container>
  </div>
);




export default Contact;
