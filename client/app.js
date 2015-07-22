'use strict';

import React from 'react';
import InputGrid from './components/input-grid';
import Preview from './components/preview'


const cell = {
  display: 'table-cell',
  width: '50%',
  verticalAlign: 'middle',
  textAlign: 'center'
}
React.render(
    <div style={{display: 'table'}}>
      <div style={cell} >
        <InputGrid />
      </div>
      <div style={cell}>
        <Preview />
      </div>
    </div>,
    document.body
);