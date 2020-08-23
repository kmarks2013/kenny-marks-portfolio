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
                <NavLink to='/#about-me'> About Me </NavLink>
                <NavLink to='/#portfolio'> Portfolio </NavLink>
                <NavLink to='/#tech-writing'> Blogs </NavLink>
                <NavLink to='/#twitter'> Twitter </NavLink>
                <NavLink to='/#contact'> Connect </NavLink>
            </div>
        </div>
    )
}

export default NavBar
