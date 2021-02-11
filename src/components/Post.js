import React, { useState, useEffect} from 'react'
import sanityClient from "../client"
import {Link} from 'react-router-dom'

export default function Post() {
    const [post, setPost] = useState(null)

    useEffect(() => {
        sanityClient.fetch(
            `*pos[_type == "post"]{
                title,
                slug,
                mainImg{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }
            `).then((response) => {
                setPost(response)
            }).catch(console.error)
    })

    return (
        <main className="bg-blue-100 m-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center styled-text">Updates</h1>
                <h2 className='text-xl text-gray-100 flex justify-center mb-10'>Here is what Lawrence has been working on lately</h2>
                <div className="grid grid-cols-3 gap-7">
                    {post && post.map((post, index) => (
                    <article>
                        <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                        <span className="block relative rounded shadow bg-white h-64" key={index}>
                            <img
                            className="w-full h-full object-cover absolute"
                            src={post.mainImage.asset.url}
                            alt={post.mainAlt.alt}>
                            <span className="block relative h-full flex justify-start items-end">
                                <h4 className="text-lg text-white font-blog px-3 py-3 bg-blue-600 bg-opacity-75 rounded"
                                >{post.title}</h4>
                            </span>
                            </img>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}