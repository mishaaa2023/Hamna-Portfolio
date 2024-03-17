import React from 'react'
import ProjectCard from '../../components/Project/ProjectCard'

const ProjectsPage = () => {
  return (
    <>
     <section className=' flex-wrap r gap-4 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
     <ProjectCard img={'project2.jfif'}name={'Beautiful Painting'}desc={'Amazing Painting that will make your room look lively...'}product={'#'}/>
       <ProjectCard img={'project.jfif'}name={'Cute Knitted Doll'}desc={'Cute Knitted Doll togive as a gift to your young ones...'}product={'#'}/>
       <ProjectCard img={'project3.webp'}name={'Beautiful Rug'}desc={"This is a beautiful rug I've recently been working on.It makes any room look neat and organized... "}product={'#'}/>
       <ProjectCard img={'project5.jfif'}name={'A rug for kids to play on'}desc={"This is a rug which I've created especiallly for children.It makes a great gift"}product={'#'}/>
      </section>
    </>
  )
}

export default ProjectsPage