/* eslint-disable react/prop-types */
import React from "react";
import HornedAnimals from "./HornedAnimals.jsx";


class Gallery extends React.Component {
  render() {
  let animals = this.props.data.map((newAnimal, index) => (
   <HornedAnimals   
   title={newAnimal.title}
    desc={newAnimal.description} 
    img={newAnimal.image_url} 
    key={index}
    />
  ));

    return (
      <>
        <main>
          
          {animals}
          
          </main>
          
      </>
    );
  }
 
}

export default Gallery;