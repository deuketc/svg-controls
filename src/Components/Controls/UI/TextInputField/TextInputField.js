import React from 'react'
import styles from './TextInputField.module.css'

const TextInputField = (props) => {
  return (
    <div className={styles.TextInputContainer}>
        <label className={props.focusActive ? styles.TextInputLabelFocused : styles.TextInputLabel} >{props.TextInput}</label>
        <input 
          className={styles.TextInput} 
          onFocus={props.focus} 
          onBlur={props.blur}
          type="text" name="test" />
    </div>
  )
}

export default TextInputField;