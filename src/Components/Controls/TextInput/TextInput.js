import React, {Component} from 'react'
import Textinputfield from '../UI/TextInputField/TextInputField'
import Textinputicon from '../UI/TextInputIcon/TextInputIcon'
import styles from './TextInput.module.css'
import Debug from '../UI/Debug/Debug'

class TextInput extends Component {

    constructor() {
        super();
        this.state = { 
            inputStateFocus : false,
            inputContainsText : false 
        }
    }
  
    componentDidMount() {
        console.log('mounted')
    }

  inputFocusHandler(){
      this.setState({
        inputStateFocus : true
      })
  }

  inputBlurHandler(){
    this.setState({
        inputStateFocus : false
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
                    TextInput={this.props.inputvalue} 
                    focusActive={this.state.inputStateFocus}
                    />
            </div>
        </div>
        <Debug CurrentAction={this.state.inputStateFocus} />
        </>
    )
  }
}

export default TextInput;