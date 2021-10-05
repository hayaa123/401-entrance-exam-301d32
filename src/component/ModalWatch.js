import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
export class ModalWatch extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showmodal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.updateOne}>
              <Form.Label>title</Form.Label>
              <Form.Control type="text" defaultValue={this.props.title} onChange={this.props.titleInputHaneler}/>
              <Form.Label>description</Form.Label>
              <Form.Control type="text" defaultValue={this.props.description} onChange={this.props.descriptionInputHaneler}/>
              <Form.Label>toUSD</Form.Label>
              <Form.Control type="text" defaultValue={this.props.toUSD} onChange={this.props.toUSDInputHaneler}/>
              <Form.Label>image_url</Form.Label>
              <Form.Control type="text" defaultValue={this.props.image_url} onChange={this.props.imgURLInputHaneler}/>
              <Button variant="primary" type='submit'>Save Changes</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalWatch;
