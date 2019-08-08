import React from 'react'
import PropTypes from 'prop-types'

function CardImage(props) {
    return (
        <img src={props.src} className="card-img-top" alt={props.name}/>
    )
}

CardImage.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string
}

export default CardImage

