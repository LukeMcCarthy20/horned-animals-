import React from "react";
import "./App.css";
import Modal from "react-bootstrap/Modal";


class SelectedBeast extends React.Component {

  render() {
    //here we need props because the showModal lives in the App, so now our =>() is prop
    // update our handleOnHide lives in the App as well. so it is a prop here of the app.jsx
    // console.log('selected beast ',this.props);
   
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectAnimalTitle}</Modal.Title>
            {/* image  */}
            <img src={this.props.selectAnimalImg} alt={this.props.selectAnimalTitle}/>
            {/* description  */}
            <p>{this.props.selectAnimaldescription}</p>
            {/* selectAnimaldescription */}
          </Modal.Header>
        </Modal>
      </>

    )
  }
}

export default SelectedBeast;