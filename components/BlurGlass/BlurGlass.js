import React from 'react';

import classes from './BlurGlass.module.css';

/*
Type : Function Component.
Return : Representation of a graphic element of a button used in the home page 
*/

const BlurGlass = props => {
  return (
    <div className={classes.blurGlass_center}>
      <div className={classes.blurGlass_container}>{props.children}</div>
    </div>
  );
};

export default BlurGlass;
