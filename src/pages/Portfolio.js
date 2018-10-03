import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => (
  <div>
    <Container style={{ marginTop: 40 }}>
      <Row>
        <Col size="md-12">
          <h1 style={{textAlign: 'center', justifyContent: 'center'}}><strong>Portfolio</strong></h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <PortfolioItem backgroundImage="">
          <div>
            <a href="https://violetproject.herokuapp.com/index.html/"><h2>Frankly</h2></a>
            <a href="https://github.com/maellingson/Frankly">GitHub Code Repository</a>
            <p>Franky is a web app that uses the IBM Watson Tone Analyzer and TwinWord APIs to detect overall sentiments and corporate jargon in a block of text. Created for Project 1 for the University of Minnesota’s Coding Bootcamp.<br></br></p>
            <p><strong>Technologies: </strong>HTML, CSS, Javascript, APIs</p>
            <p><strong>My Contributions: </strong>I researched and selected the APIs, set up the APIs to work within the application, tested the APIs, served as Project Manager and created developer documentation.</p>
            </div>
          </PortfolioItem>
        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <a href="http://whiteboardstudio.herokuapp.com/"><h2>White Board Studio</h2></a>
            <a href="https://github.com/maellingson/ProjectTwoWhiteboard">GitHub Code Repository</a>
            <p>White Board Studio is a collaborative drawing web application. Users can make their drawings public or private and share them with others. Many users can draw on the board in real time<br></br></p>
            <p><strong>Technologies: </strong>Flexbox, Canvas, P5.js, HTML, CSS, Javascript, AddThis</p>
            <p><strong>My Contributions: </strong>I designed the UI and coded the HTML, CSS and Javascript used for the sliding menu and forms. I researched and implemented the AddThis buttons to easily share boards and track analytics.</p>
          </PortfolioItem>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage= "">
            <a href="http://tunedup.herokuapp.com/"><h2>TunedUp</h2></a>
            <a href="https://github.com/maellingson/TunedUp">GitHub Code Repository</a>
            <p>TunedUp is a social networking site for musicians. Each musician creates a profile and can post notices for jam sessions, gigs, etc. The application is not live due to issues with Google Authentication.<br></br></p>
            <p><strong>Technologies: </strong>Bootstrap, HTML, CSS, Google Authentication, MongoDB, React.js</p>
            <p><strong>My Contributions: </strong>I set up MongoDB to store user and postings data, ensured that the API routes functioned properly to retrieve and store data, styled the posting layout and added user functionality to postings.</p>
          </PortfolioItem>

        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <a href="https://strangerfriends.herokuapp.com/"><h2>Stranger Friends</h2></a>
            <a href="https://github.com/maellingson/FriendFinder">GitHub Code Repository</a>
            <p>Stranger Friends is a Node.js web application based on ‘Stranger Things.’ Users fill out a survey and based on their answers, are matched with a character.<br></br></p>
            <p><strong>Technologies: </strong>Node.js, Express, HTML, CSS, Bootstrap, jQuery, APIs</p>
          </PortfolioItem>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <a href="https://maellingson.github.io/Clicky-Game/"><h2>Clicky Game</h2></a>
            <a href="https://github.com/maellingson/Clicky-Game">GitHub Code Repository</a>
            <p>Clicky-Game is a memory game based on ‘Bob’s Burgers.’ Users must click on each character only once to with the game. The placement of the characters shuffles with each click.<br></br></p>
            <p><strong>Technologies: </strong>React.js, HTML, CSS</p>
          </PortfolioItem>

        </Col>

        <Col size="md-6">
        <PortfolioItem backgroundImage="">
            <h2>BAmazon</h2>
            <a href="https://github.com/maellingson/BAmazon">GitHub Code Repository</a>
            <p>BAmazon is an Amazon-like command line app that keeps track of items, inventory and prices using a mySQL database. Download the code in GitHub to test it out!<br></br></p>
            <p><strong>Technologies: </strong>mySQL, Command Line</p>
          </PortfolioItem>
        </Col>
      </Row>
    </Container>
  </div>
);




export default Portfolio;
