import React, {useState} from 'react'

function NavBar() {
    const [title, setTitle] = useState("Kenny Marks")
    return (
        <div id='navbar'>
            <h1 className='nav-title'>{title}</h1>
            <a href='#about-me'>About Me</a>
            <a>My Work</a>
            <a href='#tech-writing'>Writings</a>
            <a>Twitter</a>
            <a>Connect</a>
        </div>
    )
}

export default NavBar
