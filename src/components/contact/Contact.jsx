import React from 'react'
import email from "../../assets/contact/emailIcon.png"
import github from "../../assets/contact/githubIcon.png"
import linkedin from "../../assets/contact/linkedinIcon.png"
import styles from "./Contact.module.css";


const Contact = () => {
  return (
    <footer  id="contact" className={styles.container}>

      <div className={styles.text}>
        <h2 >Let's get in touch</h2>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={email} alt='Email icon'/>
        <a href='mailto:sanazaier777@gmail.com'>sanazaier777@gmail.com</a>
      </li>

     

      <li className={styles.link}>
        <img src={linkedin} alt='linkedin icon'/>
        <a href='https://www.linkedin.com/in/sana-yoosuf-5668a2179/'>linkedin.con/sana yoosuf</a>
      </li>
      <li className={styles.link}>
        <img src={github} alt='github icon'/>
        <a href='mailto:sanazaier777@gmail.com'>sanazaier777@gmail.com</a>
      </li>
    </ul>


    </footer>
  )
}

export default Contact