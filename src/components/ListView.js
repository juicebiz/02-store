import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem';

function ListView(props) {
    const products = props.products

    const listItems = products.map((product,index) =>
        <ShopItem key={index} product={product} />  
    );

    return (
        <div className="cards-view">
            {listItems}
        </div>
    )
}

ListView.propTypes = {

}

export default ListView

