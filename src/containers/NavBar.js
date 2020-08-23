import React, {useState} from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

function NavBar() {
    const [title, setTitle] = useState("Kenny Marks")

    const handleClick = (e) => {
        e.persist()
        console.log(e.target.text, e.target.textContent)
        setTitle(e.target.text)
    }


    return (
        <div id='navbar'>
            <h1 className='nav-title'>{title}</h1>
            <div className='nav-links'> 
                <a onClick={(e) => handleClick(e)} href='#about-me' >About Me</a>
                <a onClick={(e) => handleClick(e)} href='#portfolio' >My Work</a>
                <a onClick={(e) => handleClick(e)} href='#tech-writing' >Writings</a>
                <a onClick={(e) => handleClick(e)} href='#twitter' >Twitter</a>
                <a onClick={(e) => handleClick(e)} href='#contact' >Connect</a>
            </div>
        </div>
    )
}

export default NavBar
