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

export class PatternAside extends Component {
  render() {
    return (
        <aside className="guide-asside-nav">
          <ul>
            <li><a href="#/pattern/atoms/button">Buttons</a></li>
          </ul>
        </aside>
    );
  }
}

export class PatternContent extends Component {
  render() {
    return (
      <section className="guide-main-content">
        <PatternAside />
        <PatternComponents />
      </section>
    );
  }
}


export class PatternAll extends Component {
  render() {
    return (
      <div className="">
        <h1>All Patterns including atoms and molecules + organisms</h1>
        <h2>Atoms</h2>
          <ol>
            <li><ButtonRaisedComponent /></li>
          </ol>
        <h2>Molecules</h2>
          <ol>
            <li><ButtonRaisedComponent /></li>
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

function PatternComponents() {
  return (
    <Switcher>
      <div path="/pattern"><PatternAll/></div>
      <div path="/pattern/atoms"><PatternAtoms/></div>
      <div path="/pattern/atoms/button"> <ButtonRaisedComponent /></div>
    </Switcher>
  );
}
