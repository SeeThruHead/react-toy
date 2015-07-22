'use strict';
import React from 'react';
import Radium from 'radium';
import gsap from 'gsap';
import cloudImage from '../assets/images/cloud.png';


let cloudTL;

const Cloud = React.createClass({
  componentDidMount() {
    const cloud = this.getDOMNode();
    TweenLite.set(cloud, {
      right: -500,
      top: (this.props.num * 100 + 100) + Math.random() * 10,
      opacity: 0
    });
    cloudTL = new TimelineMax({repeat: -1, delay: Math.random() * 30});
    cloudTL.to(cloud, 0.5, {opacity: 1})
    .to(cloud, 18, {
      right: '150%',
      ease: Linear.easeNone
    }, 0)
    .to(cloud, 0.5, {opacity: 0}, '-=0.5');
    cloudTL.play();
  },
  componentWillUnmount() {
    cloudTL.clear(); 
  },
  render() {
    const cloud = {
      position: 'absolute',
      zIndex: 2,
      transform: 'translateY(-50%)'
    }
    return (
      <div style={cloud}>
        <img src={cloudImage} />
      </div>
    );
  }
});

export default Radium(Cloud);
