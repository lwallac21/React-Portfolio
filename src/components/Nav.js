import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { NavLink } from 'react-router-dom'


export default function Nav() {
    return (
        <header className='bg-blue-600'>
            <div className='container m-auto flex justify-between'>
                <nav className="flex">
                    <NavLink 
                        activeClassName="text-white bg-blue-900"
                        className="inflex-flex tracking-widest items-center py-6 px-5 mr-4 text-blue-100 hover:text-yellow-600 text-2xl font-bold styled-text" 
                        exact to='/'
                    >
                        Lawrence Wallace
                    </NavLink>
                    <NavLink 
                        activeClassName="text-white bg-blue-900"
                        className="inline-flex items-center py-3 py-x my-6 rounded text-blue-200 hover:text-yellow-500"
                        to='post'
                    >
                        Updates
                    </NavLink>
                    <NavLink 
                        activeClassName="text-white bg-blue-900"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-500"
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-500"
                        activeClassName="text-white bg-blue-900"
                        to='/about'
                    >
                        About
                    </NavLink>
                </nav>
                <div className='inline-flex px-3 py-3 mt-3'>
                    <SocialIcon url="https://github.com/lwallac21" 
                    className="mr-4" target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width:35}} />
                    <SocialIcon url="https://www.linkedin.com/in/lawrence-wallace-94269414/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{height: 35, width:35}} />
                </div>
            </div>
        </header>
    )
}