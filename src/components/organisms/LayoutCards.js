import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'


import LayoutCardsvg from '../../mocks/card.svg'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

registerLanguage('javascript', js);



export class LayoutCardComponent extends Component {
  render() {

    return (
      <div className="guide-component-preview">
        <div className="guide-component-layout">
          <LayoutCardDescription />
          <p>Layout Specs</p>
          <LayoutCardRaw />
        </div>
      </div>
    );
  }
}

export class LayoutCardDescription extends Component {
  render() {
    return (
      <div className="guide-component-description">
        <h2>LayoutCard Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p> 
      </div>
    );
  }
}


export class LayoutCardRaw extends Component {
render() {

  return (
    <div>
      <img className="" src={LayoutCardsvg} />
    </div>
    );
  }
}

