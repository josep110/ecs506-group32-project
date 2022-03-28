import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Forum from "./pages/Forum.js"; 
import './App.css';


class App extends React.Component {


  state = {username: ""}

  handleCallback = (childData) => {
    this.setState({name: childData})
  }

  // Sets up links to other .js files acting as application 'pages' 
    //The Router allows the app to swtich to the different pages via the Sidebar

  render(){
    return (
      <Router>
        <Sidebar />
        <Switch>
        <Route exact path="/Home" render={() => (
        
          <Home Message={'Hi ' + this.state.username + '!'} />
    )}/>
        <Route path='/Profile' exact component={() => <Profile name={this.state.username} stylepath={this.state.stylePath}/>} />
        </Switch>
      </Router>
    );
        }
}

export default App;

