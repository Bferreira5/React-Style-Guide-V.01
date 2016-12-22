import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

import { PrismCode } from "react-prism";
import ReactDOMServer from 'react-dom/server'

import App from './components/App'

import './styles/index.scss'

ReactDOM.render(<App />, document.getElementById('root'))
if (module.hot) {
  module.hot.accept()
}
