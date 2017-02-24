import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Header from './Header'

class Layout extends Component{
	render() {
		return (
		<div className="content" id="content">
			<Header />
			<div className="container" id="container">
				{this.props.children}
			</div>
		</div>
	)
	}
}

export default Layout