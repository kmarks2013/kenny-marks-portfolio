import React from 'react'

const LeftArrow = ({goToPrevSlide}) => {
    return (
        <div className='left-arrow' onClick={goToPrevSlide}>
            <div className='arrow-button'>
                <i className='fa fa-angle-left fa-5x' aria-hidden='true'></i>
            </div>
        </div>
    )
}

export default LeftArrow
