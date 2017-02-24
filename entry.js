import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import createLogger from 'redux-logger'
import App from './components/App'
import initState from './state.js'

const logger = createLogger();

let store = createStore(reducer, initState, applyMiddleware(logger))

store.subscribe(() => {
	render(
		<Provider store = {store}>
			<App></App>
		</Provider>,
		document.getElementById('shopping')
	) 
})

render(
	<Provider store = {store}>
		<App></App>
	</Provider>,
	document.getElementById('shopping')
) 