import React from "react";
import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    
    };
 
  render() {
    return (
      <>
    <Header />
    <About />
      </>
    
    )
  }
}
}

export default App;
