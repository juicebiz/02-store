import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView(props) {

    const products = props.products

    const listItems = products.map((product,index) =>
        <ShopCard key={index} product={product} />  
    );

    return (
        <div className="cards-view">
            {listItems}
        </div>
    )
}

CardsView.propTypes = {

}

export default CardsView

