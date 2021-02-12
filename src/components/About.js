import React, {useState, useEffect} from 'react'
import sanityClient from '../client'
import image from '../LawrenceImage.jpg'
import anotherImage from '../background.jpg'

export default function About() {
    const [author, setAuthor] = useState(null)
    useEffect(() => {
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then(response => setAuthor(response))
        .catch(console.error)
    },[])
    if (!author) return <div>Loading...</div>
    return (
        <main className="relative bg">
            <img src={anotherImage} className='absolute w-full'></img>
            <div className="p-10 mx-auto relative container">
                <section className='bg-blue-400 opacity-2'>
                    <img src={image} className='w-36 h-48' />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className="text-6xl styled-text text-yellow-300 mb-4">
                            I'm Lawrence Wallace.
                        </h1>
                        <div className="prose text-white">
                        <p>Lawrence is a full stack developer with proficiency in Javascript,
                            Nodejs, MongoDB and React. He lives in Lakewood
                            Ohio with his two children. He does a lot of music in his
                            free time</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}