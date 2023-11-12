import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav, Modal, InputGroup, FormControl, ListGroup, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";

class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     setShow : false
  //   };
  // }
  // handleShow() {
  //   this.setState({
  //     setShow : true
  //   });
    
  //   console.log(this.state);
  // }

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      annotation:"",
      annotationList:[]
    };
  }

  handleShow = () => {
    this.setState({isActive: !this.state.isActive});
  };
  handleClose = () => {
    this.setState({isActive: false});
  };

  addAnnotation = () => {
    let ann = "";
    if (localStorage.getItem("Annotation") === null) {
      ann = "";
    } else {
      ann = localStorage.getItem("Annotation");
    }
    console.log(ann);
    ann = ann.concat(',', this.state.annotation);
    console.log(ann);
    localStorage.setItem("Annotation", ann);
    this.getAnnotationList();
    this.handleClose();
  }

  getAnnotationList = () => {
    let storageAnnotation = "";
    if (localStorage.getItem("Annotation") === null) {
      storageAnnotation = "";
    } else {
      storageAnnotation = localStorage.getItem("Annotation");
    }
    const splitAnnotations = storageAnnotation.split(",");
    this.setState({annotationList: splitAnnotations});
    // setAnnotationList(splitAnnotations);
  }

  componentDidMount(){
    let storageAnnotation = "";
    if (localStorage.getItem("Annotation") === null) {
      storageAnnotation = "";
    } else {
      storageAnnotation = localStorage.getItem("Annotation");
    }
    const splitAnnotations = storageAnnotation.split(",");
    this.setState({annotationList: splitAnnotations});
    // setAnnotationList(splitAnnotations);
  }

  render() {
    console.log(this.state.annotationList);
    return (
      <div>
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 mb-3 bg-white rounded"
        expand
      >
        <h4 className="navbar-title">Food Security Time Series Dashboard</h4>
      </Navbar>


   {/* onHide={handleClose}  */}
   <Modal show={this.state.isActive} onHide={this.handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Annotation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup>
                <FormControl placeholder="Annotation" onChange={(e) => this.setState({annotation: e.target.value})}/>
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="transparent" onClick={this.handleClose}>Cancel</Button>
              <Button variant="primary"onClick={this.addAnnotation}>Add</Button>
            </Modal.Footer>
          </Modal>


          <Row>
        <Col>
        <div> <Button variant="primary" onClick={this.handleShow} >
                    Annotation
                </Button>
        </div>
        </Col>
        <Col>
          <div className="anotations" style={{marginleft:"10px"}}>
            <h4>Notes</h4>
            <ListGroup variant="flush">
              {this.state.annotationList.map((item) => (
                <ListGroup.Item class="list-items">{item}</ListGroup.Item>
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
