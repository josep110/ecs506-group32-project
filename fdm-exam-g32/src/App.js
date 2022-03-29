import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Forum from "./pages/Forum.js"; 
import Home from "./pages/Home.js";
import Help from './pages/Help.js';
import Layout from "./pages/Layout.js";
import './App.css';

class App extends React.Component {


  state = {username: ""}

  handleCallback = (childData) => {
    this.setState({name: childData})
  }

  // Sets up links to other .js files acting as application 'pages' 
    // The Router allows the app to switch to the different pages from user interface.

  render(){
    console.log("render")
    return (
      <Router>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route path='/Home' index element={<Home />}/>
            <Route path='/Forum' element={<Forum />}/>
            <Route path='/Help' element={<Help />}/>
          </Route>
        </Routes>
      </Router>
    );
        }
}

export default App;

