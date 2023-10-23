import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import Gallery from "./Gallery";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";

import Form from 'react-bootstrap/Form'


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
    if (selected === "1") {
      let filteredChoice = data.filter(item => item.horns === 1);
      this.setState({ sortedData: filteredChoice });
    } else if (selected === "2") {
      let filteredChoice = data.filter(item => item.horns === 2);
      this.setState({ sortedData: filteredChoice });
    } else if (selected === "3") {
      let filteredChoice = data.filter(item => item.horns === 3);
      this.setState({ sortedData: filteredChoice });
    } else if (selected === "100") {
      let filteredChoice = data.filter(item => item.horns === 100);
      this.setState({ sortedData: filteredChoice });
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
        <Form>
          <Form.Select
            name="selected"
            onChange={this.handleSelect}>
            <option>Choose Number Of Animal Horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One Hundred</option>
          </Form.Select>
        </Form>


        <Gallery
          data={this.state.sortedData}
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