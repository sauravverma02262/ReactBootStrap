import React from 'react';
import {Button, Modal} from 'react-bootstrap'

class MyModal extends React.Component {
    render() {
        return (
        <Modal show={this.props.showModal12} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal - 2!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        );
    }
}

export default MyModal;
