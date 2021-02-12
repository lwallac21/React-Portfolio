import React, {  useEffect, useState} from 'react'
import sanityClient from "../client.js"

export default function Projects() {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "project"] {
            title,
            description,
            link,
            projectType
        }
        `).then(response => setProjectData(response))
        .catch(console.error)
    })
    return (
        <main className="bg-blue-200 min-h-screen" >
            <section className="container mx-auto">
                <h1 className="text-6xl styled-text flex justify-center">Projects</h1>
                <h3 className="text-lg text-gray-500 flex justify-center mb-12">Take a look at my projects!</h3>
                <section className="grid grid-cols-2 gap-9">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative shadow-xl bg-white p-10">
                        <a href={project.link}><h4 className='text-yellow-800 text-4xl font-bold'>{project.title}</h4>
                        </a>
                        <div className="text-yellow-700 space-x4">
                            <span>
                                <strong className="font-bold">{`Project type: ${project.projectType}`}</strong>
                            </span>
                            <span>
                            <p className='my-6 text-lg text-grey-600 '>{project.description}</p>
                            </span>
                            <a href={project.link} className="text-blue-500 font-bold hover:underline hover:text-blue-400">
                                Check out the project
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
             </section>
        </main>
    )
}