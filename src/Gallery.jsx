import React from "react";
import HornedAnimals from "./HornedAnimals.jsx";
import data from "./data.json";


class Gallery extends React.Component {
  render() {
    console.log(data);
    let animals = [];
    data.forEach((newAnimal, index) => {
      animals.push(<HornedAnimals   title={newAnimal.title} desc={newAnimal.description} img={newAnimal.image_url} key={index}/>)
    })

    return (
      <>
        <main>{animals}</main>
      </>
    );
  }
 
}

export default Gallery;