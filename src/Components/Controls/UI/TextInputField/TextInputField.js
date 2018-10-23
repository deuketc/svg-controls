import React from 'react'
import styles from './TextInputField.module.css'

function TextInputField(props) {
  return (
    <div className={styles.TextInputContainer}>  
        <label className={styles.TextInputLabel}>{props.inputvalue}</label>
        <input className={styles.TextInput} type="text" name="test" />
    </div>
  )
}

export default TextInputField;