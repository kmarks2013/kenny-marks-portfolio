import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

function AboutMe() {
    return (
        <div id='about-me'>
            <h2 className='section-head'>About Me</h2>
            <Flippy
                flipOnClick={true}
                flipDirection='horizontal'
                style={{
                    width: 'auto',
                    height: '100vh',
                    border: '1px solid black',
                    'box-shadow': '2px 2px 10px 5px'
                }}
            >
                <FrontSide>
                    <div className='about-body'>
                        <img className='about-img' src='../assets/headshot.jpg' alt='headshot'/>
                        <div className='about-info'>
                            <h3 id="bio">Bio:</h3>
                            <p className='bio-text'>New York based full-stack web developer experienced in Ruby on Rails, JavaScript, React, and Redux. Discovered a love of programming while completing graduate school studies in International Cybersecurity at New York University. Seeking to build exciting yet secure applications for both consumers and businesses use.</p>
                            <h3> Technical Skills: </h3>
                            <p className='bio-text'> Ruby | Ruby on Rails | HTML | CSS | JavaScript | React | Redux | React Native | MVC | SQL | SQLite | Postgresql | Responsive Web Design </p>
                        </div>
                    </div>
                </FrontSide>
                <BackSide>
                    <div className='about-body'>
                        <img className='about-img' src='../assets/fruitsnacks.jpeg' alt='fruitsnacks'/>
                        <div className='about-info'>
                        <div className='experience'>
                                <h3>Experience:</h3>
                                <p><span className='company' >Fine Buy Rite,</span> Farmingdale, NY</p>
                                <p><span className='position' >Assistant Manager,</span> 2017-2019</p>
                                <ul className='duties'>
                                    <li>
                                    Implemented acutely tuned customer service skills through addressing inquiries, and provided recommendations based on customer preferences.
                                    </li>
                                </ul>
                                <p><span className='company' >Citizens Crime Commission of NYC,</span> New York, NY</p>
                                <p><span className='position' >Global Cybercrime Research Intern,</span> 2015-2016</p>
                                <ul className='duties'>
                                    <li>
                                    Implemented acutely tuned customer service skills through addressing inquiries, and provided recommendations based on customer preferences.
                                    </li>
                                </ul>
                                <p><span className='company' >Counter-Terrorism Committee Executive Directorate,</span> New York, NY</p>
                                <p><span className='position' >Researcher,</span> 2014-2015</p>
                                <ul className='duties'>
                                    <li>
                                    Implemented acutely tuned customer service skills through addressing inquiries, and provided recommendations based on customer preferences.
                                    </li>
                                </ul>
                                <p><span className='company' >Family Service Association,</span> Egg Harbor Township, NY</p>
                                <p><span className='position' >Assistant Manager</span>, 2017-2019</p>
                                <ul className='duties'>
                                    <li>
                                    Implemented acutely tuned customer service skills through addressing inquiries, and provided recommendations based on customer preferences.
                                    </li>
                                </ul>
                                <p><span className='company' >New Hope For  Cambodian Children</span>, Phnom Penh, Cambodia</p>
                                <p><span className='position' >Assistant Manager</span>, 2017-2019</p>
                                <ul className='duties'>
                                    <li>
                                    Implemented acutely tuned customer service skills through addressing inquiries, and provided recommendations based on customer preferences.
                                    </li>
                                </ul>
                            </div>
                            <h3>Hobbies:</h3>
                            <p>  I am an avid gamer, blogger, love to build models, cook, run, travel, reading, volunteering. need  to  touch up this  section </p>
                        </div>
                    </div>
                </BackSide>

            </Flippy>
        </div>
    )
}

export default AboutMe
