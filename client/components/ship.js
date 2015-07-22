'use strict';

import React from 'react';
import Radium from 'radium';
import gsap from 'gsap';


const Ship = React.createClass({
  componentDidMount() {
    const node = this.getDOMNode();
    TweenMax.to(node, 1.3, {
      delay: Math.random() * 1.3,
      y: "+=20px",
      yoyo:true,
      repeat:-1,
      ease: Power1.easeInOut
    });

  },
  shouldComponentUpdate(nextProps) {
    return nextProps.color !== this.props.color;
  },
  render() {
    const containerStyles = {
      zIndex: 9999,
      width: 200,
      height: 200,
      float: 'left',
      position: 'relative'
    };
    const shipStyles = {
      width: '140px',
      position: 'absolute',
      top: 'calc(50% - 20px)',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };

    function reqShip(color) {
      if (!color || color === 'white') return <div></div>;
      return <img style={shipStyles} src={require('../assets/images/' + color + 'ship.png')}/>;
    }

    return (
    <div style={containerStyles}>
      {reqShip(this.props.color)}
    </div>
    );
  }
});

export default Radium(Ship);
