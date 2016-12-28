import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Switcher from 'switcheroo'


// General Images
import testImage from '../../assets/one.png'

// Atoms
import { PatternAtoms, PatternAllAtoms, PatternAsideAtoms } from '../atoms/Atoms'

// Molecules
import { PatternMolecules, PatternAllMolecules, PatternAsideMolecules } from '../molecules/Molecules'

// Organisms
import { PatternOrganism, PatternAllOrganisms, PatternAsideOrganisms } from '../organisms/Organisms'

// Subnav that sorts the patterns
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

// Primary content component where the components list
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

// The conponent view loaded when url is set to /pattern
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

// The conponent side nav loaded when url is set to /pattern
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

// Switcher routing for pattern
function PatternComponents() {
  return (
    <Switcher>
      <div className="guide-components-listing" path="/pattern"><PatternAll/></div>
        <div className="guide-components-listing" path="/pattern/atoms"><PatternAtoms/></div>
        <div className="guide-components-listing" path="/pattern/molecules"><PatternMolecules /></div>
        <div className="guide-components-listing" path="/pattern/organisms"><PatternOrganism /></div>
    </Switcher>
  );
}

// Switcher routing for side nav pattern
function PatternAside() {
  return (
    <Switcher>
      <aside className="guide-aside" path="/pattern"><PatternAllAside/></aside>
        <aside className="guide-aside" path="/pattern/atoms"><PatternAllAtoms/></aside>
        <aside className="guide-aside" path="/pattern/molecules"><PatternAllMolecules/></aside>
        <aside className="guide-aside" path="/pattern/organisms"><PatternAllOrganisms/></aside>
    </Switcher>
  );
}
