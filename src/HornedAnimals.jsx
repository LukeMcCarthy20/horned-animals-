import React from "react";

class HornedAnimals extends React.Component {
  render() {
    return (
      <>

        <h2>{this.props.title}</h2>
        <p id="desc">{this.props.desc}</p>
        <img src={this.props.img} alt={this.props.title} />

        </>
        );
  }
}

        export default HornedAnimals;