import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'

class App extends Component {

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='pattern' component={Pattern} subnav={Pattern}>
            <IndexRoute component={Pattern1} />
            <Route path='pattern2' component={Pattern2} />
            <Route path='pattern3' component={Pattern3} />
            <Route path='pattern4' component={Pattern4} />
          </Route>
          <Route path='brand' component={Brand}>
            <IndexRoute component={Brand1} />
            <Route path='brand2' component={Brand2} />
            <Route path='brand3' component={Brand3} />
            <Route path='brand3' component={Brand4} />
          </Route>
          <Route path="/print" component={Print}/>
          <Route path="/research" component={Research}/>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Main = (props) =>
  <div>
    <Headroom>
      <header className="cd-auto-hide-header">
      <Nav />
      {props.children.props.route.subnav}
      </header>
    </Headroom>
    <div className="container">
    {props.children}
    </div>
  </div>

  const Home = () => <div><h1>Hello from Design Principles</h1></div>

  const Print = () => <div><h1>Hello from Design Principles</h1></div>

  const Research = () => <div><h1>Hello from Design Principles</h1></div>


const Nav = () => ( <div>

        <div className="logo"><a href="#0"><img src="" alt="Logo" /></a></div>
        <nav className="cd-primary-nav">
        <NavTrigger />
          <ul id="cd-navigation">
            <li><IndexLink activeClassName='active' to='/'>Design Principles</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/pattern'>Pattern Library</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/brand'>Brand</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/print'>Print</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/research'>Research</IndexLink></li>
          </ul>
        </nav>
      </div>
)



const NavTrigger = () => 
  <a onClick={() => (console.log("test"))} className="nav-trigger">
    <span>
      <em aria-hidden="true" />
      Menu
    </span>
  </a>


const Pattern = (props) =>  <div>
  <nav className="cd-secondary-nav">
    <ul>
      <li><Link to='/pattern/pattern2'>Atoms</Link></li>
      <li><Link to='/pattern/pattern3'>Molecules</Link></li>
      <li><Link to='/pattern/pattern4'>Organisms</Link></li>
    </ul>
  </nav>
    {props.children}
  </div>

  const Pattern1 = () => <h3>Test Component1! ALL</h3>
  const Pattern2 = () => <h3>Test Component2! Atoms</h3>
  const Pattern3 = () => <h3>Test Component2! Molecules</h3>
  const Pattern4 = () => <h3>Test Component2! Organisms</h3>

const Brand = (props) =>  <div>
  <nav className="cd-secondary-nav">
    <ul>
      <li><Link to='/brand/brand2'>Logo</Link></li>
      <li><Link to='/brand/brand3'>Color</Link></li>
      <li><Link to='/brand/brand4'>Fonts</Link></li>
    </ul>
  </nav>
    {props.children}
  </div>

  const Brand1 = () => <h3>Test Component1! ALL</h3>
  const Brand2 = () => <h3>Test Component2! Logo</h3>
  const Brand3 = () => <h3>Test Component2! Color</h3>
  const Brand4 = () => <h3>Test Component2! Fonts</h3>


const NotFound = () => <h1>404.. This page is not found!</h1>

// Named Components

export default App
