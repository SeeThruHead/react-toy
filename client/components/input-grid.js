'use strict';

import React from 'react';
import Reflux from 'reflux';
import InputBox from './input-box';
import store from '../stores/store';
import actions from '../actions/actions';

const InputGrid = React.createClass({
  mixins: [Reflux.connect(store)],
  updateStore(id, color) {
    actions.changeColor(id, color);
  },
  render() {
    const styles = {
      width: '400',
      height: '400',
      fontSize: 0
    };
    let vals = this.state.grid.values;
    return (
      <div style={styles}>
        {vals.map((x, i) => (
              <InputBox key={i} pos={i} color={x} update={this.updateStore}/>
            )
        )}
      </div>
    );
  }
});

export default InputGrid;
