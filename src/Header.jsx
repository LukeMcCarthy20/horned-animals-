import React from "react";

class Header extends React.Component {
  render() {
    console.log('header: ',this.props.animals);
    return (
      <>
        <h1>Welcome To My Website!{this.props.animals}</h1>
      </>
    );
  }
}

export default Header;