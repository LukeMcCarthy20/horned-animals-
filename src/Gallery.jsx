import React from "react";
import HornedAnimals from "./HornedAnimals.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Gallery extends React.Component {
  render() {
  let animals = this.props.data.map((newAnimal, index) => (
   <HornedAnimals   
   title={newAnimal.title}
    desc={newAnimal.description} 
    img={newAnimal.image_url}
    addAnimal={this.props.addAnimal}
    key={index}
    handleOnShowModal={this.props.handleOnShowModal}
    />
  ));

    return (
      <>
        <main>
        <Container>
            <Row lg={4} md={3} sm={2} xs={1}>
            {animals}
            </Row>
          </Container>
          </main>
          
      </>
    );
  }
 
}

export default Gallery;