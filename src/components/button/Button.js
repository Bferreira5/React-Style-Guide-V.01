import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'
import Switcher from 'switcheroo'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

registerLanguage('javascript', js);



export class ButtonRaisedComponent extends Component {
  render() {
    return (
      <div className="">
        <h1>Button</h1>
        <ButtonRaisedDescription />
        <ButtonRaisedCode />
      </div>
    );
  }
}

export class ButtonRaisedDescription extends Component {
  render() {
    return (
      <div className="">
        <h2>Title: Flat Button</h2>
        <p>Usecase: Kitsch tbh YOLO put a bird on it bicycle rights pitchfork cold-pressed disrupt, fingerstache 3 wolf moon chia typewriter pok pok narwhal.</p> 
      </div>
    );
  }
}

export class ButtonRaisedCode extends Component {
  render() {
	const Code = ReactDOMServer.renderToStaticMarkup(<ButtonRaisedRaw />);
  return (  	
    	<div>
    	<ButtonRaisedRaw />
          <SyntaxHighlighter language='javascript' style={docco}>{ Code }</SyntaxHighlighter>
      </div>
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

