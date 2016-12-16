import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'


import testImage from '../../assets/one.png'

import { ButtonRaisedComponent } from '../atoms/ButtonRaised'
import { BadgesComponent } from '../atoms/Badges'
import { ButtonAddItemComponent } from '../atoms/ButtonAddItem'
import { ButtonCollapseActionComponent } from '../atoms/ButtonCollapseAction'
import { ButtonComActionComponent } from '../atoms/ButtonComAction'
import { ButtonFlatComponent } from '../atoms/ButtonFlat'
import { ButtonIconComponent } from '../atoms/ButtonIcon'
import { CheckboxesComponent } from '../atoms/Checkboxes'
import { RadioSelectorComponent } from '../atoms/RadioSelector'
import { ScrollBarsComponent } from '../atoms/ScrollBars'
import { SlidersComponent } from '../atoms/Sliders'
import { TogglesComponent } from '../atoms/Toggles'
import { TooltipsComponent } from '../atoms/Tooltips'


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
        <li className="guide-tile"><ButtonAddItemComponent /></li>
        <li className="guide-tile"><ButtonCollapseActionComponent /></li>
        <li className="guide-tile"><ButtonComActionComponent /></li>
        <li className="guide-tile"><ButtonFlatComponent /></li>
        <li className="guide-tile"><ButtonIconComponent /></li>
        <li className="guide-tile"><ButtonRaisedComponent /></li>
        <li className="guide-tile"><CheckboxesComponent /></li>
        <li className="guide-tile"><RadioSelectorComponent /></li>
        <li className="guide-tile"><SlidersComponent /></li>
        <li className="guide-tile"><TogglesComponent /></li>
        <li className="guide-tile"><TooltipsComponent /></li>
        <li className="guide-tile"><BadgesComponent /></li>
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
          <div className="dropdown-container">
            <PatternAsideAtoms/>
          </div>
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
        <li><a href="#/pattern/atoms/button-raised">Buttons Raised</a></li>
        <li><a href="#/pattern/atoms/button-add">Button Add</a></li>
        <li><a href="#/pattern/atoms/button-collapse">Button Collapse</a></li>
        <li><a href="#/pattern/atoms/button-compound">Button Compound</a></li>
        <li><a href="#/pattern/atoms/button-flat">Button Flat</a></li>
        <li><a href="#/pattern/atoms/button-icon">Button Icon</a></li>
        <li><a href="#/pattern/atoms/checkboxes">Checkboxes</a></li>
        <li><a href="#/pattern/atoms/radioselector">Radio Selector</a></li>
        <li><a href="#/pattern/atoms/sliders">Sliders</a></li>
        <li><a href="#/pattern/atoms/toggles">Toggles</a></li>
        <li><a href="#/pattern/atoms/tooltips">Tool Tips</a></li>
        <li><a href="#/pattern/atoms/badges">Badges</a></li>
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
          <div className="guide-components-listing" path="/pattern/atoms/button-raised"><ButtonRaisedComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/button-add"><ButtonAddItemComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/button-collapse"><ButtonCollapseActionComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/button-compound"><ButtonComActionComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/button-flat"><ButtonFlatComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/button-icon"><ButtonIconComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/checkboxes"><CheckboxesComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/radioselector"><RadioSelectorComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/scrollbars"><ScrollBarsComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/sliders"><SlidersComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/toggles"><TogglesComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/tooltips"><TooltipsComponent /></div>
          <div className="guide-components-listing" path="/pattern/atoms/badges"><BadgesComponent /></div>
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
          <aside className="guide-aside" path="/pattern/atoms/button-raised"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/button-add"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/button-collapse"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/button-compound"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/button-flat"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/button-icon"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/checkboxes"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/radioselector"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/scrollbars"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/sliders"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/toggles"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/tooltips"><PatternAllAtoms/></aside>
          <aside className="guide-aside" path="/pattern/atoms/badges"><PatternAllAtoms/></aside>
        <aside className="guide-aside" path="/pattern/molecules"><PatternAllMolecules/></aside>
          <aside className="guide-aside" path="/pattern/molecules/tiles"><PatternAllMolecules /></aside>
        <aside className="guide-aside" path="/pattern/organisms"><PatternAllOrganisms/></aside>
    </Switcher>
  );
}
