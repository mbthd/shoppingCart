import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import routes from '../routes/route'

let App = () => {
	return (
		<Router routes={ routes } history= { hashHistory }></Router>
	)
}

export default App