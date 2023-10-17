import React from "react";

class HornedAnimals extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }


    handleFavorites = () => {
      console.log('handle the favorite');
      this.setState({
        favorites: this.state.favorites + 1,
      });
    };

    handleImage = () => {
      this.handleFavorites();
    }





    render() {
      return (
        <>

          <h2>{this.props.title}</h2>
          <p className="favorites">{this.state.favorites} favorites</p>
          <p onClick={this.handleFavorites} className="heart">❤️</p>
          <p id="desc">{this.props.desc}</p>
          <img src={this.props.img} alt={this.props.title} onClick={this.handleImage} />

        </>
      );
    }
  }

        export default HornedAnimals;