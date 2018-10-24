import React from 'react'
import styles from './TextInputIcon.module.css'

function TextInputIcon(props) {
  return (
    <div className={styles.IconContainer}>
        <span className={styles.IconNumber}>{props.IconIndex}</span>
    </div>
  )
}


export default TextInputIcon;