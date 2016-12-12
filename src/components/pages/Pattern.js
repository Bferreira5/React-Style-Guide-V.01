import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'


import testImage from '../../assets/one.png'

import { ButtonRaisedComponent } from '../button/Button'

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
        <h1>All Patterns including atoms, molecules and organisms</h1>
        <h2>Atoms</h2>
          <p>All the atom modules go here</p>
        <h2>Molecules</h2>
          <p>All the Molecules modules go here</p>
        <h2>Organisms</h2>
          <p>All the Organisms modules go here</p>
      </div>
    );
  }
}

export class PatternAllAside extends Component {
  render() {
    return (
      <nav>
        <dropdown className="dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Components</label>
          <ul>
            <li className="seperator">Atoms Components</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
          </ul>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Components</a></label>
          <ul>
            <li className="seperator">Atoms</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
            <li className="seperator">Molecules</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
            <li className="seperator">Organisms</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
          </ul>
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
        <dropdown className="dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Atoms Components</label>
          <ul>
            <li className="seperator">Atoms Components</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
          </ul>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Components</a></label>
          <ul>
            <li className="seperator">Atoms</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export class PatternMolecules extends Component {
  render() {
    return (
      <ul>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
      </ul>
    );
  }
}

export class PatternAllMolecules extends Component {
  render() {
    return (
      <nav>
        <dropdown className="dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Molecules Components</label>
          <ul>
            <li className="seperator">Molecules Components</li>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
          </ul>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Back Components</a></label>
          <ul>
            <li className="seperator">Molecules</li>
            <li><a href="#/pattern/molecules/button">Buttons</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export class PatternOrganism extends Component {
  render() {
    return (
      <ul>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
      </ul>
    );
  }
}

export class PatternAllOrganisms extends Component {
  render() {
    return (
      <nav>
        <dropdown className="dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Pattern Components</label>
          <ul>
            <li className="seperator">Pattern Components</li>
            <li><a href="#/pattern/organisms/button">Buttons</a></li>
          </ul>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Components</a></label>
          <ul>
            <li className="seperator">Pattern</li>
            <li><a href="#/pattern/organisms/button">Buttons</a></li>
          </ul>
        </div>
      </nav>
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
        <div className="guide-components-listing" path="/pattern/molecules"><PatternMolecules/></div>
        <div className="guide-components-listing" path="/pattern/organisms"><PatternOrganism/></div>
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
        <aside className="guide-aside" path="/pattern/organisms"><PatternAllOrganisms/></aside>
    </Switcher>
  );
}
