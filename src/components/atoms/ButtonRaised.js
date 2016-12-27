import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'

// React code preview dependencies
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

// Tell the register which langauge to preview.
registerLanguage('javascript', js);


// A layout section of the component. Standard for all the atoms. (Need to optimise)
export class ButtonRaisedComponent extends Component {
  render() {
    return (
      <div className="guide-component-preview">
        <div className="guide-component-inner">
          <ButtonRaisedDescription />
          <p>code</p>
          <ButtonRaisedCode />
        </div>
        <div className="guide-component-inner">
          <p>Preview</p>
          <ButtonRaisedRaw />
        </div>
      </div>
    );
  }
}

// A Components description
export class ButtonRaisedDescription extends Component {
  render() {
    return (
      <div className="guide-component-description">
        <h2>Button Raised</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p> 
      </div>
    );
  }
}

// This is the placeholder for the code preview. 
export class ButtonRaisedCode extends Component {
  render() {
	const Code = ReactDOMServer.renderToStaticMarkup(<ButtonRaisedRaw />);
  return (  	
        <SyntaxHighlighter language='javascript' style={docco}>{ Code }</SyntaxHighlighter>
    );
  }
}

// A Components Code and the render of the component. This should be the actual method and props that builds the component.
export class ButtonRaisedRaw extends Component {
  render() {
    return (
    	<button className="button__raised--standard">Standard Button</button>
    );
  }
}

