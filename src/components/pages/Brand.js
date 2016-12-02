import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'


export class BrandSubNav extends Component {
  render() {
    return (
        <nav className="guide-secondary-nav">
          <ul>
            <li><a href="#/brand/atoms">Atoms</a></li>
            <li><a href="#/brand/molecules">Molecules</a></li>
            <li><a href="#/brand/organisms">Organisms</a></li>
          </ul>
        </nav>
    );
  }
}

export class BrandContent extends Component {
  render() {
    return (
      <div className="guide-main-content">
        <p>Brand Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}