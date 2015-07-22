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
    if (this.state.pickerOpen || this.props.color === 'white') return 'white';
    return 'radial-gradient(circle at 35% 35%,' + this.props.color + ', #000)';
  },
  render() {
    const styles = {
      box: {
        background: this.buttonColor(),
        border: '1px solid gray',
        width: '33%',
        height: '33%',
        float: 'left',
        boxSizing: 'border-box',
        borderRadius: '50%'
      }
    };

    return (
      <div onClick={this.togglePicker}
        style={styles.box}>
        {this.state.pickerOpen && this.state.colorList.map((x, i) => <Sel colorVal={x} key={i} pos={this.props.pos} />)}
      </div>
    );
  }
});

export default InputBox;

