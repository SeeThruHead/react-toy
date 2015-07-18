'use strict';

import React from 'react';
import Radium from 'radium';

const Sel = React.createClass({
  update() {
    this.props.cb(this.props.colorVal);
  },
  render() {
    const styles = {
      backgroundColor: this.props.colorVal,
      opacity: this.props.colorVal === 'white' ? 0 : 1,
      width: '33%',
      boxSizing: 'border-box',
      height: '33%',
      float: 'left',
      borderRadius: 50,
      border: '2px solid grey',
      transition: '.2s ease-in-out',
      ':hover': {
        transform: 'scale(1.2)'
      } 
    };

    return (
      <div onClick={this.update}
        style={styles}>
      </div>
    );
  }
});

export default Radium(Sel);

