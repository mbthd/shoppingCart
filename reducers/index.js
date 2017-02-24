const reducer = (state, action) => {

	const _state = state;

	switch (action.type) {
		case 'ALL_CHECK':
			ALL_CHECK_FN(_state);
			return _state;
		case 'SINGLE_CHECK':
			SINGLE_CHECK_FN(_state, action.shopId, action.id);
			return _state
		case 'CHANGE_AMOUNT':
			CHANGE_AMOUNT_FN(_state, action.shopId, action.id, action.code);
			return _state
		case 'CHANGE_USERINFO':
			CHANGE_USERINFO_FN(_state, action.value, action.name)
			return _state
		case 'DELETE_GOODS':
			DELETE_GOODS_FN(_state)
			return _state
		default:
			return state

	}
}

const ALL_CHECK_FN = (state) => {
	let {
		goodsList
	} = state;
	let allMoney = [];
	state.allCheck = !state.allCheck;
	goodsList.forEach(items => {
		items.goodsItem.forEach(item => {
			item.checkState = state.allCheck;
			item.checkState && allMoney.push(item.singlePrice * item.amount);
})});

	state.sum = allMoney.length ? allMoney.reduce((previous, current) => previous + current) : 0;
}

const SINGLE_CHECK_FN = (state, shopId, id) => {

	let {
		goodsList
	} = state;
	let allMoney = [];
	let i = 0;
	goodsList.forEach(items => {
		let _shopId = items.shopId == shopId;
		console.log(_shopId, 123);
		items.goodsItem.forEach(item => {
			i++;
			if (_shopId && item.id == id) {

				item.checkState = !item.checkState
			}
			item.checkState && allMoney.push(item.singlePrice * item.amount)
		})
	});

	state.sum = allMoney.length ? allMoney.reduce((previous, current) => previous + current) : 0;
	state.allCheck = allMoney.length == i;
}

const CHANGE_AMOUNT_FN = (state, shopId, id, code) => {
	let {
		allCheck,
		goodsList
	} = state;

	let allMoney = [];

	goodsList.forEach(items => {

		let _shopId = items.shopId == shopId;

		items.goodsItem.forEach(item => {

			if (_shopId && item.id == id) {
				console.log(code);
				code ? item.amount++ : item.amount > 1 && item.amount--;
			}
			allMoney.push(item.singlePrice * item.amount)
		})
	});
	state.sum = allMoney.reduce((previous, current) => previous + current);

}

const CHANGE_USERINFO_FN = (state, value, name) => {
	let userInfo = state.userInfo
	if (name == "defaultAddress") {
		if (value == "switch active") {
			userInfo[name] = "switch"
		} else {
			userInfo[name] = "switch active"
		}
	} else {
		userInfo[name] = value
	}
}
const DELETE_GOODS_FN = (state) => {

	let list = [];
	state.goodsList.forEach(item => {
		let temp = [];
		item.goodsItem.forEach(items => {
			if (!items.checkState) {
				temp.push(items)
			}
		});

		if (temp.length != 0) {
			item.goodsItem = temp;
			list.push(item)
		}
	});

	state.goodsList = list;
	state.sum = 0;
}

export default reducer