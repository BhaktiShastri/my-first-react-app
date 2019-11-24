import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {HashRouter} from "react-router-dom";

//components
import Header from "./Components/header";

import Main from "./Components/Section/main";

import Blog1 from "./Components/Section/Blogs/Blog1";
import Blog2 from "./Components/Section/Blogs/Blog2";
import Blog3 from "./Components/Section/Blogs/Blog3";
import Footer from "./Components/footer";
//components



import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <HashRouter>
        <Header />
          <Switch>
          <Route exact path="/" component={Main} />
            <Route path="/Blogs/Blog1" component={Blog1} />
            <Route path="/Blogs/Blog2" component={Blog2} />
            <Route path="/Blogs/Blog3" component={Blog3} />
          </Switch>
          <Footer />
        </HashRouter>
        
        
      </div>

    )
  }
}
export default App;
