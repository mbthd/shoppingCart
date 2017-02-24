import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import ShoppingCart from '../components/ShoppingCart'
import {
	changeAmount,
	allCheck,
	singleCheck
} from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		data: state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		add: (shopId, id, code) => {
			dispatch(changeAmount(shopId, id, code))
		},
		minus: (shopId, id, code) => {
			dispatch(changeAmount(shopId, id, code))
		},
		selectAll: () => {
			dispatch(allCheck())
		},
		singleSelect: (shopId, id) => {
			dispatch(singleCheck(shopId, id))
		}
	}
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)

export default Cart