import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'
import { PrismCode } from "react-prism";

import { LandingContent } from './pages/LandingPage'
import { DesignContent } from './pages/Design'
import { PatternContent, PatternSubNav } from './pages/Pattern'
import { BrandContent, BrandSubNav } from './pages/Brand'
import { PrintContent } from './pages/Print'
import { ResearchContent } from './pages/Research'


class App extends Component {
  render() {
    return (
      <div>
      <TopBar/>
        <main className="container">
          <MainContent />
        </main>
      </div>
    );
  }
}

class TopBar extends Component {

    constructor(props){
      super(props);
      this.state={isHide:false};
      this.hideBar = this.hideBar.bind(this)
    }
    hideBar(){
       let {isHide} = this.state
       window.scrollY > this.prev?
       !isHide && this.setState({isHide:true})
       :
       isHide && this.setState({isHide:false})

       this.prev = window.scrollY;
    }
    componentDidMount(){
        window.addEventListener('scroll',this.hideBar);
    }
    componentWillUnmount(){
         window.removeEventListener('scroll',this.hideBar);
    }
    render(){

        let classHide=this.state.isHide?"is-hidden":""
        return (
          <header className={"guide-auto-hide-header " + classHide }>
            <div className="logo"><a href="#/"><img src="" alt="Logo" /></a></div>
            <nav className="guide-primary-nav">
                <a onClick={this.handleClick} className="nav-trigger">
                    <span>
                        <em aria-hidden="true" />
                        Menu
                    </span>
                </a>
                <ul id="guide-navigation">
                    <li><a href="#/design">Design Principles</a></li>
                    <li><a href="#/pattern">Pattern Library</a></li>
                    <li><a href="#/brand">Brand</a></li>
                    <li><a href="#/print">Print</a></li>
                    <li><a href="#/research">Research</a></li>
                </ul>
            </nav>
            <SubNav />
          </header>
        );
    }
}

function SubNav() {
  return (
    <Switcher>
      <div path="/"></div>
      <div path="/design"></div>
      <div path="/pattern"><PatternSubNav /></div>
        <div path="/pattern/atoms"><PatternSubNav /></div>
          <div path="/pattern/atoms/button"><PatternSubNav /></div>
        <div path="/pattern/molecules"><PatternSubNav /></div>
        <div path="/pattern/organisms"><PatternSubNav /></div>
      <div path="/brand"><BrandSubNav /></div>
        <div path="/brand/atoms"><BrandSubNav /></div>
        <div path="/brand/molecules"><BrandSubNav /></div>
        <div path="/brand/organisms"><BrandSubNav /></div>
        <div path="/print"></div>
        <div path="/research"></div>
    </Switcher>
  );
}

function MainContent() {
  return (
    <Switcher>
      <div path="/"><LandingContent /></div>
      <div path="/design"><DesignContent /></div>
      <div path="/pattern"><PatternContent /></div>
        <div path="/pattern/atoms"><PatternContent /></div>
          <div path="/pattern/atoms/button"><PatternContent /></div>
        <div path="/pattern/molecules"><PatternContent /></div>
        <div path="/pattern/organisms"><PatternContent /></div>
      <div path="/brand"><BrandContent /></div>
        <div path="/brand/atoms"><BrandContent /></div>
        <div path="/brand/molecules"><BrandContent /></div>
        <div path="/brand/organisms"><BrandContent /></div>
      <div path="/print"><PrintContent /></div>
      <div path="/research"><ResearchContent /></div>
    </Switcher>
  );
}

export default App
