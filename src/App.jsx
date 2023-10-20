import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Gallery from "./Gallery";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";
import ListGroup from "react-bootstrap/ListGroup";
import {ListGroupItem } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "",
      showModal: false,
      selectAnimalTitle: '',
      selectAnimalImg: '',
      selectAnimaldescription: '',
      sortedData: data,
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
handleSelect = (event) => {
  let selected = event.target.value;
  if (selected === 'even') {
    let newData = data.filter((animal) => animal.horns % 2 === 0);
    this.setState({ sortedData: newData });
  } else if (selected === 'odd') {
    let newData = data.filter((animal) => animal.horns % 2 !== 0);
    this.setState({ sortedData: newData });
  } else {
    this.setState({ sortedData: data });
  }
};

  render() {
    let numbers = this.state.sortedData.map((number, index) => {
      return <ListGroupItem key={index} >{number}</ListGroupItem>
    });
    return (
      <>

        <section>
        <ListGroup>{numbers}</ListGroup>
        </section>

        <Form>
          <p>Selected Horns</p>
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </Form.Select>
        </Form>
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