import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

// Dependicies for router and classnames
import Switcher from 'switcheroo'
import classnames from 'classnames'

// Primary component page and import page
import { PatternContent, PatternSubNav } from './pages/Pattern'

// Secondary static content (placeholder).
import { LandingContent } from './pages/LandingPage'
import { DesignContent } from './pages/Design'
import { BrandContent, BrandSubNav } from './pages/Brand'
import { PrintContent } from './pages/Print'
import { ResearchContent } from './pages/Research'

// Top level flat assets (Like the logo).
import IconLogoFlat from '../assets/IconLogoFlat.svg'


// Full document wrapper layout. Used for all pages.
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

// Top bar navigation with scroll states and js class replacements.
class TopBar extends Component {

    constructor(props){
      super(props);
      // set state to hide
      this.state = {isHide:false};

      // bind hidebar to this state
      this.hideBar = this.hideBar.bind(this);

      // Set responsive nav to open.
      this.state = {isOpen: true};
    }

    click(e) {
       // Listen for click state
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen}, function() {
            (this.state.isOpen);
        });
    }

    hideBar(){
       // Scroll management of hide
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
        // class needed to set hidden css
        let classHide=this.state.isHide?"is-hidden ":""
        // class needed to toggle
        let classToggle = classnames(this.state.isOpen ? '' : 'nav-open');
        
        return (
          <header className={"guide-auto-hide-header " + classHide + classToggle }>
            <div className="logo"><a href="#/"><img src={IconLogoFlat} alt="Logo" /></a></div>
            <nav className="guide-primary-nav">
                <a onClick={this.click.bind(this)} className="nav-trigger">
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

// SubNav mounting with router paths. Tells router to mount each component at desired url path. 
function SubNav() {
  return (
    <Switcher>
      <div path="/"></div>
      <div path="/design"></div>
      <div path="/pattern"><PatternSubNav /></div>
        <div path="/pattern/atoms"><PatternSubNav /></div>
        <div path="/pattern/molecules"><PatternSubNav /></div>
        <div path="/pattern/organisms"><PatternSubNav /></div>
      <div path="/brand"><BrandSubNav /></div>
        <div path="/print"></div>
        <div path="/research"></div>
    </Switcher>
  );
}

// MainContent mounting with router paths. Tells router to mount each component at desired url path. 
function MainContent() {
  return (
    <Switcher>
      <div path="/"><LandingContent /></div>
      <div path="/design"><DesignContent /></div>
      <div path="/pattern"><PatternContent /></div>
        <div path="/pattern/atoms"><PatternContent /></div>     
        <div path="/pattern/molecules"><PatternContent /></div>
        <div path="/pattern/organisms"><PatternContent /></div>
      <div path="/brand"><BrandContent /></div>
      <div path="/print"><PrintContent /></div>
      <div path="/research"><ResearchContent /></div>
    </Switcher>
  );
}

export default App
