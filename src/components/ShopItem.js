import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
    const item = props.product
    console.log(item)
    return (
        <div className="cardrow">
            <div className="image"><img src={item.img} alt={item.name}></img></div>
            <div className="title">{item.name}</div>
            <div className="color">{item.color}</div>
            <div className="price">${item.price}</div>
            <div className="button"><button>Add to cart</button></div>
        </div>
    )
}

ShopItem.propTypes = {

}

export default ShopItem

