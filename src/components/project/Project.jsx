import React from 'react'
import projectImg from "../../assets/project/project.png"
import styles from "./Project.module.css"

const Projects = () => {
  const projectdetail= [
    {
      "title": "Project A",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Project B",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": ["React", "Express", "Node", "Sass"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Project C",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": ["React", "Express", "Node"],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    }
  ]
  return (
   <section className={styles.container} id='projects'>
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
      {
        projectdetail.map((project,id) =>{
          return <div key={id} className={styles.imagecontainer}>
            <img src={projectImg} alt={`Image of ${project.title}`} className={styles.image}/>
            <h3 className={styles.protitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.myskills}>
              {
                project.skills.map((skill,id)=>{
                  return <li key={id} className={styles.myskill}>{skill}</li>
                })
              }
            </ul>
            <div className={styles.links}>
              <a href={project.demo} className={styles.mylink}>Demo</a>
              <a href={project.source} className={styles.mylink}>Code</a>
            </div>
          </div>
        })
      }
    </div>
   </section>
  )
}

export default Projects