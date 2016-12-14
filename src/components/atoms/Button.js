import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

registerLanguage('javascript', js);



export class ButtonRaisedComponent extends Component {
  render() {
    return (
      <div className="guide-component-preview">
        <div className="guide-component-inner">
           <ButtonRaisedDescription />
        </div>
        <div className="guide-component-inner">
          <p>Preview</p>
          <ButtonRaisedRaw />
          <p>code</p>
          <ButtonRaisedCode />
        </div>
      </div>
    );
  }
}

export class ButtonRaisedDescription extends Component {
  render() {
    return (
      <div className="guide-component-description">
        <h2>Raised Button</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p> 
      </div>
    );
  }
}

export class ButtonRaisedCode extends Component {
  render() {
	const Code = ReactDOMServer.renderToStaticMarkup(<ButtonRaisedRaw />);
  return (  	
        <SyntaxHighlighter language='javascript' style={docco}>{ Code }</SyntaxHighlighter>
    );
  }
}

export class ButtonRaisedRaw extends Component {
  render() {
    return (
    	<button className="button__raised--standard">Standard Button</button>
    );
  }
}

