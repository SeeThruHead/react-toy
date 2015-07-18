'use strict';

import React from 'react';
import Reflux from 'reflux';
import { map, addIndex } from 'ramda';
import InputBox from './input-box';
import store from '../stores/store';
import actions from '../actions/actions';

const mapI = addIndex(map);

const InputGrid = React.createClass({
  mixins: [Reflux.connect(store)],
  updateStore(id, color) {
    actions.changeColor(id, color);
  },
  render() {
    const styles = {
      width: '300',
      height: '300',
      fontSize: 0
    };
    const vals = this.state.grid.values;
    const box = (x, i) => (<InputBox key={i} 
        pos={i} color={x} update={this.updateStore}/>);
    return (
      <div style={styles}>
        {mapI(box, vals)}
      </div>
    );
  }
});

export default InputGrid;
