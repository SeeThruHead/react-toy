'use strict';

import React from 'react';
import Reflux from 'reflux';
import InputBox from './input-box';
import store from '../stores/store';

const InputGrid = React.createClass({
  mixins: [Reflux.connect(store)],
  render() {
    const styles = {
      inputBox: {
        width: '300',
        height: '300',
        margin: '0 auto'
      },
      h1: {
        fontFamily: 'helvetica',
        color: 'steelblue'
      }
    };
    const vals = this.state.grid.values;
    return (
      <div style={styles.h1}>
        <h1>Please Select Your Formation</h1>
        <div style={styles.inputBox}>
          {vals.map((x, i) => <InputBox key={i} pos={i} color={x}/>)}
        </div>
      </div>
    );
  }
});

export default InputGrid;
