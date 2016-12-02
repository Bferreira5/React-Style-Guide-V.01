import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'


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
        <aside className="">
          <ul>
            <li><a href="#/pattern/atoms/component-1">Component 1</a></li>
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
        <p>ALL Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}

export class PatternCompnent1 extends Component {
  render() {
    return (
      <div className="">
        <p>Component 1 Content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    );
  }
}


function PatternComponents() {
  return (
    <Switcher>
      <div path="/pattern"><PatternAll/></div>
      <div path="/pattern/atoms"><PatternAll/></div>
      <div path="/pattern/atoms/component-1"><PatternCompnent1 /></div>
    </Switcher>
  );
}
