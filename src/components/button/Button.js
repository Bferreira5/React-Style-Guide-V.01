import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'

import { PrismCode } from "react-prism";

export class ButtonComponent extends Component {
  render() {
    return (
      <div className="">
        <h1>Button</h1>
        <ButtonDescription />
        <ButtonCode />
      </div>
    );
  }
}

export class ButtonDescription extends Component {
  render() {
    return (
      <div className="">
        <h2>Title: Flat Button</h2>
        <p>Usecase: Kitsch tbh YOLO put a bird on it bicycle rights pitchfork cold-pressed disrupt, fingerstache 3 wolf moon chia typewriter pok pok narwhal.</p> 

      </div>
    );
  }
}

export class ButtonCode extends Component {
  render() {
    return (
    	<div><TestCode /></div>
    );
  }
}

export class TestCode extends Component {
  render() {
    return (

      <div>
      <pre>
        <PrismCode className="language-jsx">
          {require("raw-loader!../button/button.js")}
        </PrismCode>
      </pre>
      </div>
    );
  }
}

