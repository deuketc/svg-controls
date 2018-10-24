import React, {Component} from 'react'
import Textinputfield from '../UI/TextInputField/TextInputField'
import Textinputicon from '../UI/TextInputIcon/TextInputIcon'
import styles from './TextInput.module.css'
import Debug from '../UI/Debug/Debug'

class TextInput extends Component {

    constructor() {
        super();
        this.state = { inputAction : "default" }
    }
  
    componentDidMount() {
        console.log('mounted')
    }

  inputFocusHandler(){
      this.setState({
        inputAction : "Input Focus"
      })
  }

  inputBlurHandler(){
    this.setState({
      inputAction : "default"
    })
} 


  render () {
    return (
        <>
        <div className={styles.inputRow}>
            <div className={styles.IconCol}>
                <Textinputicon IconIndex={this.props.inputtabindex} />
            </div>
            <div className={styles.FieldCol}>
                <Textinputfield 
                    focus={this.inputFocusHandler.bind(this)}
                    blur={this.inputBlurHandler.bind(this)} 
                    TextInput={this.props.inputvalue} />
            </div>
        </div>
        <Debug CurrentAction={this.state.inputAction} />
        </>
    )
  }
}

export default TextInput;