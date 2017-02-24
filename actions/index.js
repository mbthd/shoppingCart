/*action构造函数*/

/*全选*/
const allCheck = () => {
	return {
		type: "ALL_CHECK"
	}
}

/*单选*/
const singleCheck = (shopId, id) => {
	return {
		type: "SINGLE_CHECK",
		shopId,
		id
	}
}

/*修改数量*/
const changeAmount = (shopId, id, code) => {
	return {
		type: "CHANGE_AMOUNT",
		shopId,
		id,
		code
	}
}

/*删除*/
const deleteGoods = () => {
	return {
		type: "DELETE_GOODS"
	}
}

/*编辑用户信息*/
const changeUesrInfo = (value, name) => {
	return {
		type: "CHANGE_USERINFO",
		value,
		name
	}
}

export {
	allCheck,
	singleCheck,
	changeAmount,
	changeUesrInfo,
	deleteGoods
}