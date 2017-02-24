import React,{Component} from 'react'
import {
	render
} from 'react-dom'
import {
	Router,
	Route,
	IndexRoute,
	hashHistory
} from 'react-router'
import Layout from '../components/Layout'
import ShoppingCart from '../containers/ShoppingCart'
import UserInfo from '../containers/UserInfo'
let routes = < Route path = "/"component = {Layout} >
	< IndexRoute component = {ShoppingCart} >< /IndexRoute>
	< Route path = "shoppingCart" component = {ShoppingCart} > < /Route>
	< Route path = "userInfo"component = {UserInfo} > < /Route> 
	< /Route>

export default routes