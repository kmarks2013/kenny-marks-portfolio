import React from 'react'

const RightArrow = ({goToNextSlide}) => {
    return (
        <div className='right-arrow' onClick={goToNextSlide}>
            <i className='fa fa-angle-right fa-5x' aria-hidden='true'></i>
        </div>
    )
}

export default RightArrow
