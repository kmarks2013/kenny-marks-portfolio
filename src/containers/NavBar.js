import React, {useState} from 'react'

function NavBar() {
    return (
        <div id='navbar'>
            <h1 className='nav-title'>Kenny Marks</h1>
            <a href='#about-me'>About Me</a>
            <a>My Work</a>
            <a href='#tech-writing'>Writings</a>
            <a>Twitter</a>
            <a>Connect</a>
        </div>
    )
}

export default NavBar
