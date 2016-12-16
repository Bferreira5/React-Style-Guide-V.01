import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import DevTools from 'mobx-react-devtools'

import IconCopy from '../icons/IconCopy'
import IconDelete from '../icons/IconDelete'

import tileBackground from '../../assets/quick_analysis_tile.png'

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
          <p>code</p>
          <TileCode />
        </div>
        <div className="guide-component-inner">
          <p>Preview</p>
          <TileRaw />
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
      <li className={css}>
        <div className='tile-background'>
          <img className="tile-image" src={tileBackground} />
        </div>
        <div className='tile-name'>
          <span>Project Title</span>
        </div>
        <ul className="tile-controls">
          <li className="delete">
            <i className="icon">
              <IconDelete />
            </i>
          </li>
          <li className="copy">
            <i className="tile-actions">
              <IconCopy />
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
  let css = 'tile'

  return (
      <li className={css}>
        <div className='tile-background'>
          <img className="tile-image" src={tileBackground} />
        </div>
        <div className='tile-name'>
          <span>Project Title</span>
        </div>
        <ul className="tile-controls">
          <li className="delete">
            <i className="icon">
              <IconDelete />
            </i>
          </li>
          <li className="copy">
            <i className="tile-actions">
              <IconCopy />
            </i>
          </li>
        </ul>
      </li>
    );
  }
}

