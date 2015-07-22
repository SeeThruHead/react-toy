'use strict';

import React from 'react';
import Reflux from 'reflux';
import InputBox from './input-box';
import store from '../stores/store';

const InputGrid = React.createClass({
  mixins: [Reflux.connect(store)],
  render() {
    const styles = {
      width: '300',
      height: '300',
      fontSize: 0
    };
    const vals = this.state.grid.values;
    return (
      <div style={styles}>
        {vals.map((x, i) => <InputBox key={i} pos={i} color={x}/>)}
      </div>
    );
  }
});

export default InputGrid;
