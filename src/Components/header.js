import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./header.css";


class Header extends Component {
    render() {
      return (
          <div className="Header">
            <h1>
              Welcome to My blog!
            </h1>
            <Link to="/">Home</Link>
          </div>
      )
    }
}
export default Header;