import React, {Component} from 'react'
import styles from './TextInputIcon.module.css'
import {TweenMax} from "gsap/TweenMax";

class TextInputIcon extends Component {

  constructor(props){
    super(props);

    //this.myElement = null;
    this.myCircle = null;

    //this.myTween = null;
    this.animation = null
 
  }

  componentDidMount(){
    // use the node ref to create the animation
    //this.myTween = TweenMax.to(this.myElement, 1, {x: 100, y: 100});
    
    /*
    this.animation = new TimelineMax({paused: true });

    this.animation.to(this.myCircle, 1, {ease: Power2.easeOut, strokeDashoffset:0});

    this.animation.play(); 
    */
   this.myTween = TweenMax.set(this.myElement, {strokeDashoffset:"176"});
   this.myTween = TweenMax.to(this.myElement, .85, {rotationZ:"360deg", repeat:2, delay:.4, ease:'Linear.easeIn'});

   this.myTween = TweenMax.to(this.myCircle, .5, {strokeDashoffset:"90", delay:.2, ease:'Linear.easeIn'});
   this.myTween = TweenMax.to(this.myCircle, .41, {strokeDashoffset:"176", delay:1.6, ease:'Linear.easeIn'});

   this.myTween = TweenMax.to(this.myElement2, .8, {strokeDashoffset:"-12", delay:1.6, ease:'Linear.easeIn'});

  }

  render(){
    return (
      <div className={styles.IconContainer}>
          
          <svg ref={svg => this.myElement2 = svg} className={styles.Tick} height="60" width="60">
            <polyline fill="none" stroke="#2195F3" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" points="52.447,14.359 
            25.614,41.192 17.389,32.968 "/>
            </svg>

          <svg className={styles.Loader} ref={svg => this.myElement = svg} height="60" width="60">
            <circle  ref={circle => this.myCircle = circle}  cx="30" cy="30" r="28" stroke="#2195F3" strokeLinecap="round" strokeWidth="4" fill="none" />
          </svg>

          <span className={styles.IconNumber}>{this.props.IconIndex}</span>
      </div>
    )
  }
}


export default TextInputIcon;