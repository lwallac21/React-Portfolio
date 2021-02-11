import React from 'react'
import {NavLink} from 'react-router-dom'


export default function Nav() {
    return (
        <header className='bg-blue-600'>
            <div className='container m-auto flex justify-between'>
                <nav className="flex">
                    <NavLink 
                        className="inflex-flex tracking-widest items-center py-5 px-3 mr-4 text-blue-100 hover:text-yellow-600 text-2xl font-bold styled-text" 
                        exact to='/'
                    >
                        Lawrence Wallace
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 py-3 my-6 rounded text-blue-200 hover:text-yellow-500"
                        to='post'
                    >
                        Updates
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 py-3 my-6 rounded text-blue-200 hover:text-yellow-500"
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 py-3 my-6 rounded text-blue-200 hover:text-yellow-500"
                        to='/about'
                    >
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}