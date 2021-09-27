import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
    const item = props.product
    return (
        <div className="card">
            <h3>{item.name}</h3>
            <div className="color">{item.color}</div>
            <img src={item.img} alt={item.name}></img>
            <div className="action">
            <div className="price">${item.price}</div>
            <button>Add to cart</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    product: PropTypes.object
}

export default ShopCard

