import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Router, hashHistory } from 'react-router'

import './styles/index.scss'

_.mixin({
  isTrf (trf) {
    const regex = /[trfTRF]{3}\d+\.??\d{1,2}/
    return _.isEmpty(_.clone(trf).replace(regex, ''))
  }
})

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'patient/:trf',
      component: App
    }
  ]
}

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
