import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Switcher from 'switcheroo'


// Molecules
import { LayoutCardComponent } from '../organisms/LayoutCards'

export class PatternOrganism extends Component {
  render() {
    return (
      <ul>
        <li id="Layout1" className="guide-tile"><LayoutCardComponent /></li>
      </ul>
    );
  }
}

export class PatternAllOrganisms extends Component {
  render() {
    return (
      <nav>
        <dropdown className="guide-component-dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Pattern Components</label>
          <div className="dropdown-container">
            <PatternAsideOrganisms />
          </div>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Back to Components</a></label>
          <PatternAsideOrganisms />
        </div>
      </nav>
    );
  }
}

export class PatternAsideOrganisms extends Component {
  render() {
    return (
      <ul>
        <li className="seperator">Organisms</li>
        <li><a onClick={() => document.getElementById("Layout1").scrollIntoView(true)}>Layout Cards</a></li>
      </ul>
    );
  }
}
