'use strict';

import Reflux from 'reflux';
import {times, reject, equals, length, lensIndex, set} from 'ramda';
import actions from '../actions/actions';

let grid = {
  values: times(() => 'white', 9)
};

let store = Reflux.createStore({
  listenables: [actions],

  onChangeColor(id, color) {
    const newValues = set(lensIndex(id), color, grid.values);
    console.log(newValues);
    const isColor = reject(equals('white'));
    const numColors = length(isColor(newValues));

    if (numColors > 5) {
      alert('Too many ships');
    } else {
      grid.values = newValues;
      this.trigger({grid});
    }

  },

  getInitialState() {
    return {grid};
  }
});

export default store;
