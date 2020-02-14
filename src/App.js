import React, {Component} from "react";
import Navigation from "./components/Navigation";
import Survey from "./components/Survey";
import Landing from "./components/Landing";
import ExportData from "./components/ExportData";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import 'bulma/css/bulma.css'

const custAPI = "https://addecanted-db.herokuapp.com/CUSTOMERS"
class App extends Component {
  constructor() {
    super()
    this.state = {
      customerReturn: []
    }
  }
  async componentDidMount() {
    let responce = await fetch(custAPI);
    let json = await responce.json();
    console.log("jsonlog", json);
    this.setState({
      customerReturn: json
    })
    return Promise.resolve("Dummy response to keep the console quiet");
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route
            path="/"
            render={() => <Navigation className="navigationElement" />}
          />
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path="/survey" render={() => <Survey />} />
            <Route exact path="/export" render={() => <ExportData customerReturn={this.state.customerReturn} />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
