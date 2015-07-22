'use strict';

import React from 'react';
import {times} from 'ramda';
import Reflux from 'reflux';
import store from '../stores/store';
import Ship from './ship';
import Cloud from './cloud';

const Preview = React.createClass({
  mixins: [Reflux.connect(store)],
  render() {
    const styles = {
      background: 'skyblue',
      overflow: 'hidden',
      width: 600,
      height: 600,
      boxSizing: 'border-box',
      position: 'relative'
    }
    const vals = this.state.grid.values;
    return (
      <div style={styles}>{vals.map((x, i) => <Ship color={x} key={i}/>)}
        {times((n) => <Cloud num={n} key={n}/>, 5)}
      </div>
    );
  }
});

export default Preview;
