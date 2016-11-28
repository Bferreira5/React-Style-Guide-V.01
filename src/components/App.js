import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import Headroom from 'react-headroom'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='pattern' component={Pattern}>
            <IndexRoute component={Component1} />
            <Route path='component2' component={Component2} />
            <Route path='component3' component={Component3} />
            <Route path='component4' component={Component4} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Nav = () => ( <div>
        <div className="logo"><a href="#0"><img src="img/cd-logo.svg" alt="Logo" /></a></div>
        <nav className="cd-primary-nav">
          <a onClick={() => alert('click')} className="nav-trigger">
            <span>
              <em aria-hidden="true" />
              Menu
            </span>
          </a> 
          <ul id="cd-navigation">
            <li><IndexLink activeClassName='active' to='/'>Design Principles</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/address'>Address</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/about'>About</IndexLink></li>

            <li><IndexLink activeClassName='active' to='/pattern'>Pattern Library</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/Brand'>Brand</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/print'>Print</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/research'>Research</IndexLink></li>
            <li><IndexLink activeClassName='active' to='/namedComponent'>Named Components</IndexLink></li>
          </ul>
        </nav>
      </div>
)

const Container = (props) =>
<div>
  <Headroom>
    <header className="cd-auto-hide-header nav-open">
    <Nav />
    
    </header> 
    {props.children}
  </Headroom>
  <div className="container">

  </div>
</div>
const Home = () => <h1>Hello from Design Principles</h1>

const Pattern = (props) => <div>
  <nav className="cd-secondary-nav">
    <ul>
      <li><Link to='/pattern/Component2'>Atoms</Link></li>
      <li><Link to='/pattern/Component3'>Molecules</Link></li>
      <li><Link to='/pattern/component4'>Orginisms</Link></li>
    </ul>
  </nav>
  {props.children}
  </div>

  const Component1 = () => <h3>Test Component1! ALL</h3>
  const Component2 = () => <h3>Test Component2! Atoms</h3>
  const Component3 = () => <h3>Test Component2! Molecules</h3>
  const Component4 = () => <h3>Test Component2! Orginisms</h3>

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)

const NotFound = () => <h1>404.. This page is not found!</h1>

// Named Components

const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

  const Title = () => (
    <h1>Hello from Title Component</h1>
  )

  const SubTitle = () => (
    <h1>Hello from SubTitle Component</h1>
  )

export default App
