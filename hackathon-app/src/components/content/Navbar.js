import React from "react";
import { Navbar, Button, Nav, Modal, InputGroup, FormControl, ListGroup, Row, Col, Container } from "react-bootstrap";

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      annotation: "",
      annotationList: []
    };
  }

  handleShow = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  handleClose = () => {
    this.setState({ isActive: false });
  };

  addAnnotation = () => {
    let storageAnnotation = localStorage.getItem("Annotation")? JSON.parse(localStorage.getItem("Annotation")) : [];
    
    // append new annotation to local storage
    storageAnnotation.push(this.state.annotation);
    localStorage.setItem("Annotation", JSON.stringify(storageAnnotation));

    // update annotation list in state
    this.setState({ annotationList: storageAnnotation });
    this.handleClose();
  }

  componentDidMount() {
    let storageAnnotation = localStorage.getItem("Annotation")? JSON.parse(localStorage.getItem("Annotation")) : [];
    this.setState({ annotationList: storageAnnotation });
  }

  render() {
    return (
      <div>
        <Navbar
          bg="light"
          className="navbar shadow-sm p-3 mb-3 bg-white rounded"
          expand
        >
          <h4 className="navbar-title">Macroeconomic Researcher Food Security Time Series and Large Language Chat GPT Dashboard</h4>
        </Navbar>

        {/* annotation modal */}
        <Modal show={this.state.isActive} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add Annotation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <FormControl placeholder="Annotation" onChange={(e) => this.setState({ annotation: e.target.value })} />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="transparent" onClick={this.handleClose}>Cancel</Button>
            <Button variant="primary" onClick={this.addAnnotation}>Add</Button>
          </Modal.Footer>
        </Modal>

        <Row>
          <Col>
            <div>
              <Button variant="primary" onClick={this.handleShow} >
                Annotation
              </Button>
            </div>
          </Col>
          <Col>
            <div className="annotations" style={{ marginleft: "10px" }}>
              <h4>Notes</h4>
              <ListGroup variant="flush">
                {this.state.annotationList.map((item, index) => (
                  <ListGroup.Item className="list-items" key={index}>{item}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NavBar;
