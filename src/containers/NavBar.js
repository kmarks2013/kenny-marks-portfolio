import React, {useState} from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { useHistory } from "react-router-dom"

function NavBar() {
    const [title, setTitle] = useState("Kenny Marks")

    const handleClick = (e) => {
        setTitle(e.target.text)
    }


    return (
        <div id='navbar'>
            <h1 className='nav-title'>{title}</h1>
            <div className='nav-links'>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#about-me' onClick={(e) => handleClick(e)} > About Me </NavLink>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#my-work' onClick={(e) => handleClick(e)} > My Work </NavLink>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#blog' onClick={(e) => handleClick(e)} > My Blog </NavLink>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#twitter' onClick={(e) => handleClick(e)} > Twitter </NavLink>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#external' onClick={(e) => handleClick(e)} > External </NavLink>
            </div>
            <div className='eject-div'>
                <div className='eject-button'></div>
            </div>
        </div>
    )
}

export default NavBar
