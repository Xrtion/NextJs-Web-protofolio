import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "Flutter Women Center Mobile App",
        description: "Menggunakan pemograman Dart dengan framework Flutter yang mendalam dan bekerja dalam team untuk membuat aplikasi Women Center aplikasi Khusus wanita untuk jejang karir dan konsultasi mengenai mental healt",
        image: "/images/projects/p1.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Capstone-Tim-14/women-center-mobile"
    }
]

const ProjectSection = () => {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>
            My Project
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectData.map((project) => (
                <ProjectCard
                    key = {project.id}
                    title = {project.title}
                    description = {project.description}
                    imgUrl = {project.image}
                    tags = {project}
                    gitUrl={project.gitUrl}
                />
            ))}
        </div>
    </div>
  )
}

export default ProjectSection