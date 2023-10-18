import React from "react";
import "./App.css";
import Header from './Header.jsx';
import Footer from './Footer'
import Gallery from './Gallery';
import data from "./data.json";

class App extends React.Component {

  render() {
    
    console.log(data);
    return (
    <>
       <Header />
       <Gallery data = {data}/>
       <Footer />

    </>
    )
  }
}

export default App;