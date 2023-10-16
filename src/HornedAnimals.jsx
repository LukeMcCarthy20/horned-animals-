import React from "react";

class HornedAnimals extends React.Component {
  render() {
    return (
      <>

        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
        <img src={this.props.img} alt={this.props.title} />

        </>
        );
  }
}

        export default HornedAnimals;