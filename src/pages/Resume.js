import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import {Document, Page} from "react-pdf";
import myResume from "../assets/Resume_Ellingson.pdf"

class Resume extends Component {
  state = {
    numPages: 2,
    pageNumber: 1,
    pageNumber2: 2,
  }
 
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber, pageNumber2, } = this.state;
 
    return (
        <Row>
        <Col size="md-2">
        </Col>
        <Col size="md-8">
        <div style={{textAlign: 'center', justifyContent: 'center'}}>
        <h1 style={{ marginTop: 40, }}><strong>Resume</strong></h1>
        <Document style={{justifyContent:'center'}}
          file={myResume}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber2} />
        </Document>
        <button style={{alignContent: 'center'}}> 
        <a href={myResume} download="MarissaEllingson_Resume">Download Resume</a></button>
        </div>
        </Col>
        </Row>
   
    );
  }
}



export default Resume;


