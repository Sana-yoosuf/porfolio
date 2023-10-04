import React from 'react'
import styles from "./Experience.module.css"

import HTML from "../../assets/skills/html.png"
import CSS from "../../assets/skills/css.png"
import react from "../../assets/skills/react.png"

import Google from "../../assets/history/google.png"
import microsoft from "../../assets/history/microsoft.png"
import Netfilx from "../../assets/history/netflix.png"



const Experience = () => {

    const skills = [
        {

            title: 'HTML',
            imgUrl: HTML,

        },
        {
            title: 'CSS',
            imgUrl: CSS,


        },
        {
            title: 'REACT',
            imgUrl: react,


        },

    ];
    const history = [
        {
            "role": "Software Engineer",
            "organisation": "Google",
            "startDate": "Sept, 2022",
            "endDate": "Present",
            "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
            "imageSrc": Google
        },
        {
            "role": "UI Designer",
            "organisation": "Mirosoft",
            "startDate": "Aug, 2021",
            "endDate": "Aug, 2022",
            "experiences": ["Worked on Windows 11", "Designed the control panel"],
            "imageSrc": microsoft
        },
        {
            "role": "SWE Intern",
            "organisation": "Netflix",
            "startDate": "Apr, 2020",
            "endDate": "Jun, 2020",
            "experiences": [
                "Worked on component library",
                "Helped create UI components"
            ],
            "imageSrc": Netfilx
        }
    ]



    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            return( <div key={id} className={styles.skill}>
                                    <div className={styles.skillsImgContainer}>
                                        <img src={skill.imgUrl} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            )
                        })}
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return <li key={id} className={styles.historyItem}>
                                <img src={historyItem.imageSrc} alt={historyItem.organisation} />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>

                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>

                                        })}
                                    </ul>
                                </div>

                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Experience