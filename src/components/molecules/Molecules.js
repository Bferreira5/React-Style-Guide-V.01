import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Switcher from 'switcheroo'


// Molecules
import { TileComponent } from '../molecules/Tiles'

export class PatternMolecules extends Component {
  render() {
    return (
      <ul>
        <li id="Tiles" className="guide-tile"><TileComponent /></li>
      </ul>
    );
  }
}

export class PatternAllMolecules extends Component {
  render() {
    return (
      <nav>
        <dropdown className="guide-component-dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Molecules Components</label>
          <div className="dropdown-container">
            <PatternAsideMolecules />
          </div>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Back to Components</a></label>
          <PatternAsideMolecules />
        </div>
      </nav>
    );
  }
}

export class PatternAsideMolecules extends Component {
  render() {
    return (
      <ul>
        <li className="seperator">Molecules</li>
        <li><a onClick={() => document.getElementById("Tiles").scrollIntoView(true)}>Tiles</a></li>
      </ul>
    );
  }
}