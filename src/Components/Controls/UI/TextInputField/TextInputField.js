import React, {Component} from 'react'
import styles from './TextInputField.module.css'
import {TweenMax} from 'gsap/TweenMax';



class TextInputField extends Component {

  resetStokeOnFocusHandler(){
    this.myTween = TweenMax.set(this.inputStroke, {width:"100%"});
    this.myTween = TweenMax.set(this.inputStroke, {backgroundColor:"#9f9f9f"});
  }

  animateStokeOnFocusHandler(){
    this.myTween = TweenMax.to(this.inputStroke, .25, {width:"0", ease:'Linear.easeIn'});
    this.myTween = TweenMax.to(this.inputStroke, .5, {width:"100%", delay:.25, ease:'Bounce.easeOut'});
    this.myTween = TweenMax.to(this.inputStroke, .5, {backgroundColor:"#2195f3", delay:.25, ease:'Linear.easeIn'});
  }

  render () {
    return (
      <div className={styles.TextInputContainer}>
          <label className={this.props.focusActive ? styles.TextInputLabelFocused : styles.TextInputLabel} >{this.props.TextInput}</label>
          <input 
            className={styles.TextInput} 
            onFocus={this.props.focus} 
            onBlur={this.props.blur}
            onChange={this.props.change}
            type="text" name="test" />
          <div ref={div => this.inputStroke = div} className={styles.InputStroke}></div>
      </div>
    )
  }
}

export default TextInputField;