import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {

    const switchFunction = props.onSwitch 
    const view = props.icon

    return (
        <div>
            <span className="material-icons" onClick={switchFunction}>{view}</span>
        </div>
    )
}

IconSwitch.propTypes = {

}

export default IconSwitch

