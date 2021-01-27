import React, {useState} from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
// import { useHistory } from "react-router-dom"

function NavBar() {
    const [title, setTitle] = useState("")

    const handleClick = (e) => {
        setTitle(e.target.text)
    }


    return (
        <div id='navbar'>
            <h3 className='nav-title'>{title}</h3>
            <div className='nav-links'>
                <div className='nav-links-left'>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#about-me' onClick={(e) => handleClick(e)} >About Me</NavLink>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#my-work' onClick={(e) => handleClick(e)} >My Work</NavLink>
                </div>
                {/* <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#blog' onClick={(e) => handleClick(e)} >My Blog</NavLink> */}
                <div className='nav-links-right'>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#twitter' onClick={(e) => handleClick(e)} >Twitter</NavLink>
                <NavLink className='nav-link' scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} to='/#external' onClick={(e) => handleClick(e)} >External</NavLink>
                </div>
            </div>
            <div className='eject-div'>
                <div className='eject-button'>
                   <h1> Kenny Marks </h1>
                </div>
            </div>
        </div>
    )
}

export default NavBar
