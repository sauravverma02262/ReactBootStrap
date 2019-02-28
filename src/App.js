import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Modal} from 'react-bootstrap'
import MyModal from './MyModal';
class App extends Component {

  state = {
    showModal1: false,
    showModal12: false
  }

  handleClose =()=> {
    this.setState({ showModal12: false ,  showModal1:false});
  }

  handleShowModal1 = () => {
    this.setState({ showModal1: true});
  }

  handleShowModal2 = () => {
    this.setState({ showModal12: true});
  }

  render() {
    return (
      <div className="App">
        <div>
          <Button 
          variant="primary"
          onClick={this.handleShowModal1}>Modal 1</Button>
          <Button 
          variant="primary"
          onClick={this.handleShowModal2}>Modal 2</Button>
        </div>
        <Modal show={this.state.showModal1} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!- 1</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <MyModal showModal12={this.state.showModal12} handleClose={this.handleClose} />
        
      </div>
    );
  }
}

export default App;
