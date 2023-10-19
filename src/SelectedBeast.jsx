import React from "react";
import "./App.css";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {

  render() {


    return (
      <>
        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectAnimal}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>

    )
  }
}

export default SelectedBeast;