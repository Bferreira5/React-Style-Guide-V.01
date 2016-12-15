import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'


import testImage from '../../assets/one.png'

import { ButtonRaisedComponent } from '../atoms/Button'

import { TileComponent } from '../molecules/Tiles'

export class PatternSubNav extends Component {
  render() {
    return (
        <nav className="guide-secondary-nav">
          <ul>
            <li><a href="#/pattern/atoms">Atoms</a></li>
            <li><a href="#/pattern/molecules">Molecules</a></li>
            <li><a href="#/pattern/organisms">Organisms</a></li>
          </ul>
        </nav>
    );
  }
}

export class PatternContent extends Component {

  constructor(props){
    super(props);
    this.state={isNudge:false};
    this.scrollNudge = this.scrollNudge.bind(this)
  }
  scrollNudge(){
     let {isNudge} = this.state
     window.scrollY > this.prev?
     !isNudge && this.setState({isNudge:true})
     :
     isNudge && this.setState({isNudge:false})

     this.prev = window.scrollY;
  }
  componentDidMount(){
      window.addEventListener('scroll',this.scrollNudge);
  }
  componentWillUnmount(){
       window.removeEventListener('scroll',this.scrollNudge);
  }
  render() {
    let classNudge=this.state.isNudge?"is-hidden-nudge":""
    return (
      <section className={"guide-main-content " + classNudge}>
        <div className="guide-body">
          <PatternAside />
          <main className="guide-content">
            <PatternComponents />
          </main>
        </div>
      </section>
    );
  }
}



export class PatternAll extends Component {
  render() {
    return (
      <div className="">
        <h1>Atoms</h1>
          <PatternAtoms />
        <h1>Molecules</h1>
          <PatternMolecules />
        <h1>Organisms</h1>
          <PatternOrganism />
      </div>
    );
  }
}

export class PatternAllAside extends Component {
  render() {
    return (
      <nav>
        <dropdown className="guide-component-dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Components</label>
          <div className="dropdown-container">
            <PatternAsideAtoms/>
            <PatternAsideMolecules />
            <PatternAsideOrganisms />
          </div>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Components</a></label>
          <PatternAsideAtoms/>
          <PatternAsideMolecules />
          <PatternAsideOrganisms />
        </div>
      </nav>
    );
  }
}

export class PatternAtoms extends Component {
  render() {
    return (
      <ul>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
      </ul>
    );
  }
}

export class PatternAllAtoms extends Component {
  render() {
    return (
      <nav>
        <dropdown className="guide-component-dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Atoms Components</label>
          <PatternAsideAtoms />
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Back to Components</a></label>
          <PatternAsideAtoms />
        </div>
      </nav>
    );
  }
}

export class PatternAsideAtoms extends Component {
  render() {
    return (
      <ul>
        <li className="seperator">Atoms</li>
        <li><a href="#/pattern/atoms/button">Buttons</a></li>
        <ul>
          <li><a href="#/pattern/atoms/button">Flat Buttons</a></li>
          <li><a href="#/pattern/atoms/button">Raised Buttons</a></li>
          <li><a href="#/pattern/atoms/button">Compound Action Buttons</a></li>
          <li><a href="#/pattern/atoms/button">Icon Buttons</a></li>
          <li><a href="#/pattern/atoms/button">Collaped Action Icons</a></li>
          <li><a href="#/pattern/atoms/button">Add an Item</a></li>
        </ul>
        <li><a href="">Checkboxes & Radio Buttons</a></li>
        <li><a href="">Toggles</a></li>
        <li><a href="">Sliders</a></li>
        <li><a href="">Scroll Bars</a></li>
        <li><a href="">Tooltips</a></li>
        <li><a href="">Form Fields</a></li>
        <li><a href="">Dropdown</a></li>
        <li><a href="">Search Fields</a></li>
        <li><a href="">Search Fields</a></li>
        <li><a href="">Cards</a></li>
        <li><a href="">Badges</a></li>
      </ul>
    );
  }
}

export class PatternMolecules extends Component {
  render() {
    return (
      <ul>
        <li className="guide-tile"><TileComponent /></li>
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
          <PatternAsideMolecules />
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
        <li><a href="#/pattern/molecules/tiles">Tiles</a></li>
      </ul>
    );
  }
}

export class PatternOrganism extends Component {
  render() {
    return (
      <ul>
        <li className="guide-tile"><TileComponent /></li>
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
          <PatternAsideOrganisms />
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
        <li><a href="#/pattern/organisms/tiles">Tiles</a></li>
      </ul>
    );
  }
}


// Switcher routing for pattern


function PatternComponents() {
  return (
    <Switcher>
      <div className="guide-components-listing" path="/pattern"><PatternAll/></div>
        <div className="guide-components-listing" path="/pattern/atoms"><PatternAtoms/></div>
          <div className="guide-components-listing" path="/pattern/atoms/button"><ButtonRaisedComponent /></div>
        <div className="guide-components-listing" path="/pattern/molecules"><PatternMolecules /></div>
          <div className="guide-components-listing" path="/pattern/molecules/tiles"><TileComponent /></div>
        <div className="guide-components-listing" path="/pattern/organisms"><PatternOrganism /></div>
    </Switcher>
  );
}

function PatternAside() {
  return (
    <Switcher>
      <aside className="guide-aside" path="/pattern"><PatternAllAside/></aside>
        <aside className="guide-aside" path="/pattern/atoms"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/button"><PatternAllAtoms/></aside>
        <aside className="guide-aside" path="/pattern/molecules"><PatternAllMolecules/></aside>
          <aside className="guide-aside" path="/pattern/molecules/tiles"><PatternAllMolecules /></aside>
        <aside className="guide-aside" path="/pattern/organisms"><PatternAllOrganisms/></aside>
    </Switcher>
  );
}
