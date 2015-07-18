'use strict';

import Reflux from 'reflux';
import {repeat, reject, equals, length, lensIndex, set, compose} from 'ramda';
import actions from '../actions/actions';

let grid = {
  values: repeat('white', 9)
};

let store = Reflux.createStore({
  listenables: [actions],

  onChangeColor(id, color) {
    const newValues = set(lensIndex(id), color)(grid.values);
    const isColor = reject(equals('white'));
    const numColors = compose(length, isColor)(newValues);

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
