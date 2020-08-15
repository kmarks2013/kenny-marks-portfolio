import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

function AboutMe() {
    return (
        <div id='about-me'>
            <h2 className='section-head'>About Me</h2>
            <Flippy
                flipOnClick={true}
                flipDirection='horizontal'
            >
                <FrontSide>
                    <img className='about-img' src='../assets/headshot.jpg' alt='headshot'/>
                    <h3>Bio:</h3>
                    <p>Bio Text</p>
                    <h3>Technical Skills:</h3>
                    <p>Technical Text</p>
                    <h3>Experience:</h3>
                    <p>Experience Text</p>
                </FrontSide>
                <BackSide>
                    <img className='about-img' src='../assets/fruitsnacks.jpeg' alt='fruitsnacks'/>
                    <h3>Interests:</h3>
                    <p>Interest Text</p>
                    <h3>Hobbies:</h3>
                    <p>Hobbies Text</p>
                </BackSide>

            </Flippy>
            <h2 className='section-head'>About Me</h2>
            <img className='about-img' src='../assets/headshot.jpg' alt='headshot'/>
            <h3>Bio:</h3>
            <p>Bio Text</p>
            <h3>Technical Skills:</h3>
            <p>Technical Text</p>
            <h3>Experience:</h3>
            <p>Experience Text</p>
            <img className='about-img' src='../assets/fruitsnacks.jpeg' alt='fruitsnacks'/>
            <h3>Interests:</h3>
            <p>Interest Text</p>
            <h3>Hobbies:</h3>
            <p>Hobbies Text</p>
        </div>
    )
}

export default AboutMe
