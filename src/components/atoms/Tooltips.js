import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

registerLanguage('javascript', js);



export class TooltipsComponent extends Component {
  render() {
    return (
      <div className="guide-component-preview">
        <div className="guide-component-inner">
          <TooltipsDescription />
          <p>code</p>
          <TooltipsCode />
        </div>
        <div className="guide-component-inner">
          <p>Preview</p>
          <TooltipsRaw />
        </div>
      </div>
    );
  }
}

export class TooltipsDescription extends Component {
  render() {
    return (
      <div className="guide-component-description">
        <h2>Tooltips</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p> 
      </div>
    );
  }
}

export class TooltipsCode extends Component {
  render() {
	const Code = ReactDOMServer.renderToStaticMarkup(<TooltipsRaw />);
  return (  	
        <SyntaxHighlighter language='javascript' style={docco}>{ Code }</SyntaxHighlighter>
    );
  }
}

export class TooltipsRaw extends Component {
  render() {
    return (
    	<button className="button__raised--standard">Standard Button</button>
    );
  }
}

