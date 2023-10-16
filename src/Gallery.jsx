import React from "react";
import HornedAnimals from "./HornedAnimals.jsx";


class Gallery extends React.Component {
  render() {
    return (
      <>
        <HornedAnimals
          title="Horned Animals"
          desc="Animals with horns"
          img="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        />
        <HornedAnimals
          title="Horned Animals"
          desc="Animals with horns"
          img="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        />


      </>
    );
  }
}

export default Gallery;