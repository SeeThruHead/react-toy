'use strict';

import React from 'react';
import Radium from 'radium';
import actions from '../actions/actions';

const Sel = React.createClass({
  update() {
    actions.changeColor(this.props.pos, this.props.colorVal);
  },
  render() {
    const styles = {
      background: 'radial-gradient(circle at 35% 35%,' + this.props.colorVal + ', #000)',
      opacity: this.props.colorVal === 'white' ? 0 : 1,
      width: '33%',
      boxSizing: 'border-box',
      height: '33%',
      float: 'left',
      borderRadius: 50,
      fontSize: 30,
      transition: '.2s ease-in-out',
      ':hover': {
        transform: 'scale(1.2)'
      } 
    };

    return (
      <div onClick={this.update} style={styles}></div>
    );
  }
});

export default Radium(Sel);

