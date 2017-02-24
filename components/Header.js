import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { deleteGoods } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        data: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        del:() => {dispatch(deleteGoods())}
    }
}


class Header extends  Component{
    constructor() {
        super()
    }
	render(){
        console.log(this.props.data)
        return (
            <header>
                <div className="header">
                    <div className="left">
                        <span>返回</span>
                    </div>
                    <div className="center">
                        <div className="title">购物车</div>
                    </div>
                    <div className="right">
                        <span onClick={this.props.del}>移除</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)