import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Headroom from 'react-headroom'
import Switcher from 'switcheroo'


export class LandingContent extends Component {
  render() {
    return (
      <div>
		<div className="guide-block">
			<div className="guide-block-content first-message">
				<div className="guide-block-content-inner">
					<h2>Take the work off my plate.</h2>
					<h2>Don’t add to my burden.</h2>
				</div>
			</div>
		</div>
		<div className="guide-block">
			<div className="guide-block-content first-message">
				<div className="guide-block-content-inner">
					<h2>Filter out the noise</h2>
					<h2>Don’t confuse or complicate.</h2>
				</div>
			</div>
		</div>
      </div>
    );
  }
}

