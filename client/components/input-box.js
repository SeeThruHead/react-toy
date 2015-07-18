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
  update(color) {
    this.props.update(this.props.pos, color);
  },
  togglePicker() {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  },
  render() {
    const styles = {
      box: {
        backgroundColor: this.state.pickerOpen ? 'white' : this.props.color,
        border: '1px solid gray',
        width: '33%',
        height: '33%',
        float: 'left',
        boxSizing: 'border-box'
      }
    };

    return (
      <div onClick={this.togglePicker}
        style={styles.box}>
        {this.state.pickerOpen ? this.state.colorList.map((x, i) => (
          <Sel colorVal={x} key={i} cb={this.update}/>
        )) : null}
      </div>
    );
  }
});

export default InputBox;

