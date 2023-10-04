import React from 'react'

import styles from "./About.module.css"
import aboutImg from "../../assets/about/aboutImage.png"
import cursor from "../../assets/about/cursorIcon.png"
import server from "../../assets/about/serverIcon.png"

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={aboutImg} alt='laptop pic'  className={styles.aboutImg}/>
                <ul className={styles.aboutItems}>

                    <li className={styles.aboutItemsList}>
                        <img src={cursor} alt='cursor icon' />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Devoloper</h3>
                            <p>I'm a frontend developer with experience in building responsive
                                and optimozed sites.I' have designed multiple landing pages
                                and created design systems as well
                            </p>
                        </div>
                    </li>


                    <li className={styles.aboutItemsList}>
                        <img src={server} alt='server icon' />
                        <div  className={styles.aboutItemText}>
                            <h3>ReactJs Devoloper</h3>
                            <p>Experienced in reactJs and completed 6 month internship
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItemsList}>
                        <img src={cursor} alt='cursor icon' />
                        <div  className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I' have designed multiple landing pages
                                and created design systems as well
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About