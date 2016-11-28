import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import Headroom from 'react-headroom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

import App from './components/App'

import './styles/index.scss'

ReactDOM.render(<App />, document.getElementById('root'))
if (module.hot) {
  module.hot.accept()
}
