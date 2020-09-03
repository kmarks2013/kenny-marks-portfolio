import React from 'react'

const LeftArrow = ({goToPrevSlide}) => {
    return (
        <div className='left-arrow' onClick={goToPrevSlide}>
            <i className='fa fa-angle-left fa-5x' aria-hidden='true'></i>
        </div>
    )
}

export default LeftArrow
