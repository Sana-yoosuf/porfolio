
import React from 'react'
import styles from "./App.module.css"
import "./index.css"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'



const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
     
    </div>
  )
}

export default App
