


import React from "react";
import Mypic from "../../assets/about/sana.png"

import styles from "./Hero.module.css";
import { color } from "framer-motion";
import {BsInstagram} from "react-icons/bs"


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>  I'm Sana Yoosuf</h1>
        <p className={styles.description}>
          Hello, my name is Sana Yoosuf and I,m a Frontend devoloper with
           1 year experience in creating and designing user-friendly websites
           and web applications. Reach out if you"d like to know more.
        </p>
       
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
      
      
      <img
        src={Mypic}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div>
        
      </div>
      <div className={styles.bottomBlur} />
      
    </section>
  );
};
export default Hero



