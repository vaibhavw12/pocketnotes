import React from 'react'
import styles from './DisplayHome.module.css'
import homeImage from './image-removebg-preview 1.png'
import lockImage from './Vector (3).png'

export const DisplayHome = () => {
  return (
    <div className={styles.displayNotesCard}>
      
      <div className={styles.homeImage}>
        <img src={homeImage} alt='default'></img>
        <span className={styles.appName}>Pocket Notes</span>
          <p>Send and receive messages without keeping your phone online.<br></br>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
      </div>
      <footer>
        <img src={lockImage} alt='encrypted'></img> <span>end-to-end encrypted</span>
      </footer>
    </div>
  )
}
