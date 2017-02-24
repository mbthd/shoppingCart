import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'

class ShoppingCart extends Component{
    constructor() {
        super()
    }
    render() {
        let data = this.props.data
        return (
            <article className="shopCartPage">
                
                    {
                        data.goodsList.map((items,key) => {
                            return(
                                <div className="list disabled" key={key}>
                                    <h1 className="list-item checkbox">
                                        <label>{items.shopName}</label>
                                    </h1>
                                    {items.goodsItem.map((item,key) => {
            
                                        return (
                                            <div className="list-item checkbox" key={key}>
                                                <input type="checkbox" name="price" checked={item.checkState} onChange={ () => {this.props.singleSelect(items.shopId, item.id)}}/>
                                                <div className="proItem">
                                                    <div className="imgr"><img src="../images/lpro1.jpg" alt="" /></div>
                                                        <div className="dscr">
                                                        <h1 className="t1">{item.goodsName}</h1>
                                                        <h2 className="t2">{item.goodsDes}</h2>
                                                        <h3 className="price">￥{item.singlePrice.toFixed(2)}</h3>
                                                        <div className="counter">
                                                            <input type="text" value={item.amount} readOnly/>
                                                            <i className="add" onClick={ () => {this.props.add(items.shopId, item.id, true)} }></i>
                                                            <i className="minus" onClick={ () => {this.props.minus(items.shopId, item.id, false)}}></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                <div className="total">
                <div className="inner row">
                <div className="cell">
                    <div className="checkbox">
                       <label><input type="checkbox" name="total" checked={data.allCheck} onClick = { () => { this.props.selectAll() } } />全选</label>
                    </div> 
                    <div className="num">
                        总计：<b>￥{data.sum.toFixed(2)}</b>
                    </div> 
                </div>
                <button className="setBtn"><Link to="userInfo" style={{color: "#fff"}}>去结算</Link></button>
            </div>
        </div>
            </article>
        )
    }
}

export default ShoppingCart