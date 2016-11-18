import _ from 'lodash'
import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

class Root extends React.Component {
  render () {
    return       <header className="cd-auto-hide-header">
        <div className="logo"><a href="#0"><img src="img/cd-logo.svg" alt="Logo" /></a></div>
        <nav className="cd-primary-nav">
          <a href="#cd-navigation" className="nav-trigger">
            <span>
              <em aria-hidden="true" />
              Menu
            </span>
          </a> 
          <ul id="cd-navigation">
            <li><a href="#0">Design Principles</a></li>
            <li><a href="#0">Pattern Library</a></li>
            <li><a href="#0">Brand</a></li>
            <li><a href="#0">Print</a></li>
            <li><a href="#0">Research</a></li>
          </ul>
        </nav> 
        <nav className="cd-secondary-nav">
          <ul>
            <li><a className="active" href="#0">Intro</a></li>
            <li><a href="#0">Organisms</a></li>
            <li><a href="#0">Molecules</a></li>
            <li><a href="#0">Atoms</a></li>
          </ul>
        </nav> 
      </header> 

  }
}



export default Root