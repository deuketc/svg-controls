import React from 'react'
import Textinputfield from '../UI/TextInputField/TextInputField'
import Textinputicon from '../UI/TextInputIcon/TextInputIcon'
import styles from './TextInput.module.css'

function TextInput(props) {
  return (
    <div className={styles.inputRow}>
        <div className={styles.IconCol}>
            <Textinputicon />
        </div>
        <div className={styles.FieldCol}>
            <Textinputfield inputvalue={props.inputvalue} />
        </div>
    </div>
  )
}

export default TextInput;