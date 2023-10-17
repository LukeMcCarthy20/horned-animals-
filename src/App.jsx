import React from "react";
import "./App.css";
import Header from './Header.jsx';
import Footer from './Footer'
import Gallery from './Gallery';

class App extends React.Component {

  render() {
    return (
    <>
       <Header />
       <Gallery />
       <Footer />

    </>
    )
  }
}

export default App;