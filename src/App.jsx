import React from "react";
import "./App.css";
import Header from './Header.jsx';
import Footer from './Footer'
import Main from './MainBody.jsx';

class App extends React.Component {

  render() {
    return (
    <>
       <Header />
       <Main />
       <Footer />

    </>
    )
  }
}

export default App;