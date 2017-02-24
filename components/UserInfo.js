import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

class UserInfo extends Component{
    constructor() {
        super()
    }
	render() {
        let address = this.props.data.userInfo
		return (
			<article className="editIfoPage">
        		<div className="list">
            		<div className="list-item">
                	<div className="ipt-itm">
                    <label className="bit1">收货人</label>
                    <div className="ipt"><input type="text" placeholder="" value={address.receiver} onChange={ (a) => this.props.changeReceiver(a, "receiver") } /></div>
                	</div>
            	</div>
            	<div className="list-item">
            	    <div className="ipt-itm">
            	        <label>手机号码</label>
            	        <div className="ipt"><input type="text" placeholder="" value={address.phoneNum} onChange={ (e) => this.props.changePhoneNum(e, "phoneNum") } /></div>
            	    </div>
            	</div>
            	<div className="list-item">
            	    <div className="ipt-itm">
            	        <label>所在地区</label>
            	        <div className="ipt"><input type="text" placeholder="" value={address.location} onChange={ (e) => this.props.changeLocation(e, "location") } /></div>
            	    </div>
            	</div>
            	<div className="list-item">
            	    <div className="ipt-itm arr">
                    <label>详细地址</label>
                    <div className="ipt"><input type="text" placeholder="" value={address.detailLocation} onChange={ (e) => this.props.changeDetailLocation(e, "detailLocation") } /></div>
                </div>
            	</div>
            	<div className="list-item">
            		<span>设为默认地址</span>
           			<div className={address.defaultAddress} onClick={ (e) => this.props.changeDefaultAddress(e, "defaultAddress") }></div>
            	</div>
        		</div>        
    		</article>
	 	)
	}
}

export default UserInfo