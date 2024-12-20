import React from 'react'
import img from "../../assets/Illustration.png"
import styles from "./average.module.scss";
 
export const Average = () => {
  return (
    <>
    {/* <main  className={styles.umumi}> */}
    
            <img src={img} alt="" />
            <h1 className={styles.basliq}>
          Get your most important<br />tasks done in no time
        </h1>
        <p className={styles.yazi}>
          Sign up for free and turbocharge your productivity today<br />
          with the world's best product management platform
        </p>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>
        
    
    </>
  )
}
