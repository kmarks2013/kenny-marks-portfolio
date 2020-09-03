import React, {useState} from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';

function NavBar() {
    const [title, setTitle] = useState("Kenny Marks")

    const handleClick = (e) => {
        setTitle(e.target.text)
    }


    return (
        <div id='navbar'>
            <h1 className='nav-title'>{title}</h1>
            <div className='nav-links'>
                <NavLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#about-me' onClick={(e) => handleClick(e)} > About Me </NavLink>
                <NavLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#my-work' onClick={(e) => handleClick(e)} > My Work </NavLink>
                <NavLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#blog' onClick={(e) => handleClick(e)} > My Blog </NavLink>
                <NavLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#twitter' onClick={(e) => handleClick(e)} > Twitter </NavLink>
                <NavLink scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#contact' onClick={(e) => handleClick(e)} > Connect </NavLink>
            </div>
        </div>
    )
}

export default NavBar
