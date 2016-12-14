import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

registerLanguage('javascript', js);



export class TileComponent extends Component {
  render() {
    return (
      <div className="guide-component-preview">
        <div className="guide-component-inner">
           <TileDescription />
        </div>
        <div className="guide-component-inner">
          <p>Preview</p>
          <TileRaw />
          <p>code</p>
          <TileCode />
        </div>
      </div>
    );
  }
}

export class TileDescription extends Component {
  render() {
    return (
      <div className="guide-component-description">
        <h2>Tile Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p> 
      </div>
    );
  }
}

export class TileCode extends Component {
  render() {
	// const Code = ReactDOMServer.renderToStaticMarkup(<TileRaw />);
  const Code = `
      <li className="tile">
        <div className="tile-background">
          
        </div>
        <div className="tile-name">
          <span>Untitled analysis</span>
        </div>
        <ul className="tile-controls" >
          <li className="delete" >
            <i className="icon">
              
            </i>
          </li>
        </ul>
      </li>
  `;
  return (  	
        <SyntaxHighlighter language='javascript' style={docco}>{ Code }</SyntaxHighlighter>
    );
  }
}

export class TileRaw extends Component {
  render() {
    return (
      <li className="tile">
        <div className="tile-background">
          
        </div>
        <div className="tile-name">
          <span>Untitled analysis</span>
        </div>
        <ul className="tile-controls" >
          <li className="delete" >
            <i className="icon">
              
            </i>
          </li>
        </ul>
      </li>
    );
  }
}

