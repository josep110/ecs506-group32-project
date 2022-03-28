import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Forum from "./pages/Forum.js"; 
import React from 'react';
import './App.css';

class App extends React.Component {


  state = {username: ""}

  handleCallback = (childData) => {
    this.setState({name: childData})
  }

  // Sets up links to other .js files acting as application 'pages' 
    // The Router allows the app to switch to the different pages from user interface.

  render(){
    return (
      <Router>
        <Routes>
          <Route path='/Forum' render={() => <Forum />} />
        </Routes>
      </Router>
    );
        }
}

export default App;

