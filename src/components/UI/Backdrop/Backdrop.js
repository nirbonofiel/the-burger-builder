import React from 'react';

import calsses from './Backdrop.css';

const backdrop = props =>
  props.show ? (
    <div className={calsses.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
