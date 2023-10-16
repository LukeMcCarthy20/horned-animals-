import React from "react";

class HornedAnimals extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <>

        <article>
          {/* <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p> */}
        </article>

      </>
    );
  }
}

export default HornedAnimals;