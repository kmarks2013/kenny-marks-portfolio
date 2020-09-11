import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

function AboutMe() {
    return (
        <div id='about-me'>
            <Flippy
                flipOnClick={true}
                flipDirection='horizontal'
                style={{
                    width: 'auto',
                    height: '100vh',
                    border: '1px solid black',
                    'boxShadow': '2px 2px 10px 5px'
                }}
            >
                <FrontSide>
                    <div className='about-body'>
                        <img className='about-img' src='../assets/headshot.jpg' alt='headshot'/>
                        <div className='about-info'>
                            <h3 className="about-head">Bio:</h3>
                            <p className='bio-text'>New York based full-stack web developer experienced in Ruby on Rails, JavaScript, React, and Redux. Discovered a love of programming while completing graduate school studies in International Cybersecurity at New York University. Seeking to build exciting yet secure applications for both consumers and businesses use.</p>
                            <h3 className='about-head' > Technical Skills: </h3>
                            <table>
                                <tbody>

                                    <tr>
                                        <td>Ruby</td>
                                        <td>Redux</td>
                                    </tr>
                                    <tr>
                                        <td>Ruby on Rails</td>
                                        <td>React Native</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                        <td>MVC</td>
                                    </tr>
                                    <tr>
                                        <td>CSS</td>
                                        <td>SQLite</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>Postgresql</td>
                                    </tr>
                                    <tr>
                                        <td>SQL</td>
                                        <td>Responsive Web Design</td>
                                    </tr>
                                    <tr>
                                        <td>React</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </FrontSide>
                <BackSide>
                    <div className='about-body'>
                        <img className='about-img' src='../assets/fruitsnacks.jpeg' alt='fruitsnacks'/>
                        <div className='about-info'>
                        <div className='experience'>
                                <h3 className='about-head'>Experience:</h3>
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
                                        Researched and monitored various cybercrime prevention trends and public policies in both the US and Europe.
                                    </li>
                                    <li>
                                        Constructed an agenda to facilitate a working group between the Citizens Crime Commission, the FBI and the Attorney General's office of the Southern District of New York (SDNY).
                                    </li>
                                </ul>
                                <p><span className='company' >Counter-Terrorism Committee Executive Directorate,</span> New York, NY</p>
                                <p><span className='position' >Researcher,</span> 2014-2015</p>
                                <ul className='duties'>
                                    <li>
                                        Co-authored an internal report suggesting actionable recommendations for CTED, focusing on issues faced by the member states with regards to terrorism and cyber threats.
                                    </li>
                                    <li>
                                        One of 6 students selected to participate in an annual partnership between NYU and the Counter Terrorism Committee Executive Directorate (CTED).
                                    </li>
                                </ul>
                                <p><span className='company' >Family Service Association,</span> Egg Harbor Township, NY</p>
                                <p><span className='position' >Assistant Training Coordinator,</span> 2011-2013</p>
                                <ul className='duties'>
                                    <li>
                                        Conducted the fall and spring "Board and Care Core Operators Training Program" for over 100 boarding home operators throughout New Jersey.
                                    </li>
                                </ul>
                                <p><span className='company' >New Hope For  Cambodian Children</span>, Phnom Penh, Cambodia</p>
                                <p><span className='position' >Volunteer English Teacher,</span> 2017-2019</p>
                                <ul className='duties'>
                                    <li>
                                        Spent 75 days teaching English at an orphanage for children with HIV/AIDS
                                    </li>
                                </ul>
                            </div>
                            <h3 className='about-head'>Hobbies:</h3>
                            <p>  I am an avid gamer, blogger, love to build models, cook, run, travel, reading, volunteering. need  to  touch up this  section </p>
                        </div>
                    </div>
                </BackSide>

            </Flippy>
        </div>
    )
}

export default AboutMe
