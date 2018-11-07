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
            inputHasEmail : false,
            inputHasValidated : false
        }
    }
  
    componentDidMount() {
        console.log('mounted')
    }

  inputFocusHandler(){
      this.setState({
        inputStateFocus : true
      })
      this.inputField.animateStokeOnFocusHandler();
  }

  inputChangeHandler(event){

    if (this.state.inputHasValidated==true) {
        this.inputIcon.resetLoadingAnimation();
        this.setState({
            inputHasValidated : false
        })
    }

  }



  inputBlurHandler(event){
   
    if(event.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        this.setState({inputHasEmail:true, inputHasValidated:true});
        this.inputIcon.playLoadingAnimation();
    }else{
        this.setState({inputHasEmail:false});
        console.log(event.target.value);
    }

    if (event.target.value === "") {
        this.setState({
            inputStateFocus : false
        })
    }

    this.inputField.resetStokeOnFocusHandler();
} 


  render () {
    return (
        <>
        <div className={styles.inputRow}>
            <div className={styles.IconCol}>
                <Textinputicon ref={instance => { this.inputIcon = instance; }} IconIndex={this.props.inputtabindex} playLoadingAnimation={this.state.inputHasEmail} />
            </div>
            <div className={styles.FieldCol}>
                <Textinputfield 
                    ref={instance => { this.inputField = instance; }} 
                    focus={this.inputFocusHandler.bind(this)}
                    blur={this.inputBlurHandler.bind(this)} 
                    TextInput={this.props.inputvalue} 
                    focusActive={this.state.inputStateFocus}
                    change={this.inputChangeHandler.bind(this)}
                    />
            </div>
        </div>
        <Debug label={"Focused"} CurrentAction={this.state.inputStateFocus} />
        <Debug label={"Email Confirmed"} CurrentAction={this.state.inputHasEmail} />
        <Debug label={"Has Validated"} CurrentAction={this.state.inputHasValidated} />
        </>
    )
  }
}

export default TextInput;