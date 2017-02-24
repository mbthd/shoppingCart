import React, {
	Component
} from 'react'
import {
	connect
} from 'react-redux'
import UserInfo from '../components/UserInfo'
import {
	changeUesrInfo
} from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		data: state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		changeReceiver: (x, name) => {
			dispatch(changeUesrInfo(x.target.value, name))
		},
		changePhoneNum: (e, name) => {
			dispatch(changeUesrInfo(e.target.value, name))
		},
		changeLocation: (e, name) => {
			dispatch(changeUesrInfo(e.target.value, name))
		},
		changeDetailLocation: (e, name) => {
			dispatch(changeUesrInfo(e.target.value, name))
		},
		changeDefaultAddress: (e, name) => {
			dispatch(changeUesrInfo(e.target.className, name))
		},
	}
}

const Address = connect(mapStateToProps, mapDispatchToProps)(UserInfo)

export default Address