import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Gallery from "./Gallery";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "",
      showModal: false,
      selectAnimalTitle: '',
      selectAnimalImg: '',
      selectAnimaldescription: ''
    };
  }

  addAnimal = () => {
    console.log("hearts");
    this.setState({
      animal: this.state.animal + "❤️",
    });
  };

  handleOnHide = () => {
    this.setState({
      showModal: false,
    });
  };

  handleOnShowModal = (title, img, description) => {
    // console.log('TID!',title, img, description);
    this.setState({
      showModal: true,
      selectAnimalTitle: title,
      selectAnimalImg: img,
      selectAnimaldescription: description
    });
  };

  render() {
    return (
      <>
        <Header animals={this.state.animal} />

        <Gallery
          data={data}
          addAnimal={this.addAnimal}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer />

        <SelectedBeast 
          showModal={this.state.showModal}
          handleOnHide={this.handleOnHide}
          selectAnimalTitle={this.state.selectAnimalTitle}
          selectAnimalImg={this.state.selectAnimalImg}
          selectAnimaldescription={this.state.selectAnimaldescription}
        />
      </>
    );
  }
}

export default App;



{/* <Modal show={this.state.showModal} onHide={this.handleOnHide}>
<Modal.Header closeButton>
  <Modal.Title>{this.state.selectAnimal}</Modal.Title>
</Modal.Header>
</Modal> */}