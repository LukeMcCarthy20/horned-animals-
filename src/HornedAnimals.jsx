import React from "react";
import { Card, Col } from "react-bootstrap";
import "./App.css";
class HornedAnimals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      animalNeeded: false,
    };
  }

  handleLikes = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  handleAnimalClick = () => {
    this.props.handleOnShowModal(this.props.title);
  };




  render() {
    // console.log('add animal',this.props.addAnimal);

    return (
      <Col>
        <Card className="h-100 p-3" >
          <Card.Body>
            <Card.Title onClick={this.props.addAnimal}>{this.props.title}</Card.Title>

            <Card.Img
              variant="top"
              src={this.props.img}
              alt={this.props.title}
              title={this.props.title}
              onClick={this.handleAnimalClick}
            />

            <h3>{this.props.title}</h3>
            <p>{this.state.favorites} Likes</p>
            <p onClick={this.handleLikes}>Click to favorite the animal!</p>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedAnimals;
