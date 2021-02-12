import React from 'react'
import image from '../background.jpg'

export default function Main() {
    return (
        <main>
            <img src={image} alt='mountain and lakes with trees' className="absolute object-cover w-full h-full"></img>
            <section className="relative flex justify-center min-h-screen pt-12 px-8 lg:pt-64 z-10">
                <h1 className="text-6xl text-white font-bold styled-text title-name">Lawrence Wallace</h1>
            </section>
        </main>
    
        )
}