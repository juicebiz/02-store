import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import shortid from 'shortid'

function CardsView(props) {

    const products = props.products

    const listItems = products.map((product) =>
        <ShopCard key={shortid.generate()} product={product} />  
    );

    return (
        <div className="cards-view">
            {listItems}
        </div>
    )
}

CardsView.propTypes = {
    products: PropTypes.array
}

export default CardsView

