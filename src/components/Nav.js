import React from 'react'
import {NavLink} from 'react-router-dom'


export default function Nav() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink exact to='/'>
                        Lawrence Wallace
                    </NavLink>
                    <NavLink to='post'>
                        Updates
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}