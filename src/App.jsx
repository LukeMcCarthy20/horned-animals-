import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Gallery from "./Gallery";
import data from "./data.json";
import Modal from "react-bootstrap/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "",
      showModal: false,
      selectAnimal: "",
    };
  }

  addAnimal = () => {
    console.log('hearts');
    this.setState({
      animal: this.state.animal + "❤️",
    });
  };

  handleOnHide = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOnShowModal = (animalTitle) => {
    this.setState({
      showModal: true,
      selectAnimal: animalTitle,
    });
  };

  render() {

    // console.log(this.state.animal);
    return (
      <>
        <Header animals={this.state.animal} />

        <Gallery
          data={data}
          addAnimal={this.addAnimal}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectAnimal}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
