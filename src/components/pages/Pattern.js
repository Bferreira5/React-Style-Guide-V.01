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

export class PatternAside extends Component {
  render() {
    return (
        <aside className="guide-aside">
          <dropdown className="dropdown">
            <input id="toggle2" type="checkbox" />
            <label htmlFor="toggle2" >Components</label>
            <ul>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
            </ul>
          </dropdown>
          <div className="side-nav-desktop">
            <label>Components</label>
            <ul>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
              <li><a href="#/pattern/atoms/button">Buttons</a></li>
            </ul>
          </div>
        </aside>
    );
  }
}

export class PatternAll extends Component {
  render() {
    return (
      <div className="">
        <h1>All Patterns including atoms and molecules + organisms</h1>
        <h2>Atoms</h2>
        <ButtonRaisedComponent />
        <h2>Molecules</h2>
          <ol>
            <li>Stuff</li>
          </ol>
      </div>
    );
  }
}

export class PatternAtoms extends Component {
  render() {
    return (
      <div className="">
        <h1>All Patterns it's Atoms</h1>
          <ol>
            <li><ButtonRaisedComponent /></li>
          </ol>
      </div>
    );
  }
}

// Switcher routing for pattern

function PatternComponents() {
  return (
    <Switcher>
      <div path="/pattern"><PatternAll/></div>
      <div path="/pattern/atoms"><PatternAtoms/></div>
      <div path="/pattern/atoms/button"> <ButtonRaisedComponent /></div>
    </Switcher>
  );
}
