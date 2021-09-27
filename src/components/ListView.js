import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'
import shortid from 'shortid'

function ListView(props) {
    const products = props.products

    const listItems = products.map((product) =>
        <ShopItem key={shortid.generate()} product={product} />  
    );

    return (
        <div className="cards-view">
            {listItems}
        </div>
    )
}

ListView.propTypes = {
    products: PropTypes.array
}

export default ListView

