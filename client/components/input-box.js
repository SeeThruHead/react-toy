'use strict';

import React from 'react';
import Sel from './sel';

const InputBox = React.createClass({
  getInitialState() {
    return {
      pickerOpen: false,
      colorList: [
        'white',
        'blue',
        'white',
        'brown',
        'green',
        'red',
        'white',
        'yellow',
        'white']
    }
  },
  togglePicker() {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  },
  buttonColor() {
    if (this.state.pickerOpen || this.props.color === 'white') return 'bisque';
    return 'radial-gradient(circle at 35% 35%,' + this.props.color + ', #000)';
  },
  render() {
    const styles = {
      container: {
        border: '1px solid burlywood',
        width: '33%',
        height: '33%',
        float: 'left',
        boxSizing: 'border-box',
        background: 'bisque',
        position: 'relative',
      },
      box: {
        background: this.buttonColor(),
        borderRadius: '50%',
        width: '100%',
        height: '100%'
      },
      clear: {
        position: 'absolute',
        fontSize: 30,
        color: 'red',
        height: 30,
        width: 30,
        top: -3,
        left: 0
      }
    };

    return (
      <div style={styles.container} onClick={this.togglePicker}>
        {this.state.pickerOpen && <div style={styles.clear}>&times;</div>}
        <div 
          style={styles.box}>
          {this.state.pickerOpen && this.state.colorList.map((x, i) => <Sel colorVal={x} key={i} pos={this.props.pos} />)}
        </div>
      </div>
    );
  }
});

export default InputBox;

